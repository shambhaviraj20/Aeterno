import os
import psycopg2
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

# Secure secrets from .env
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
DATABASE_URL = os.getenv("DATABASE_URL")

# Groq client (NO manual URL needed)
client = Groq(api_key=GROQ_API_KEY)

# Define tones by era (used in prompt)
era_tones = {
    "80s": "Use language from the 1980s with words like 'gnarly', 'rad', and 'totally'.",
    "90s": "Speak in a 90s tone using words like 'dope', 'fly', and 'awesome'.",
    "2000s": "Be chill and casual like early internet slang. Think MySpace meets mall culture.",
    "futuristic": "Use sleek, tech-savvy futuristic tone like AI bots in 2050. Use emoji and clean phrasing.",
}

# ✅ Fetch matching product data from PostgreSQL
def fetch_products_from_db(era, keywords=None):
    conn = psycopg2.connect(DATABASE_URL)
    cursor = conn.cursor()

    query = """
    SELECT ic.title, ic.description
    FROM item_categories ic
    JOIN subcategories sc ON ic.subcategory_id = sc.id
    JOIN era_categories ec ON sc.era_id = ec.id
    WHERE LOWER(ec.name) = %s
    """
    params = [era.lower()]

    if keywords:
        keyword_clauses = []
        for kw in keywords:
            keyword_clauses.append("""
                LOWER(ic.title) ILIKE %s OR LOWER(ic.description) ILIKE %s
                OR LOWER(ic.size) ILIKE %s OR LOWER(ic.style) ILIKE %s
                OR LOWER(sc.name) ILIKE %s
            """)
            params.extend([f"%{kw}%"] * 5)
        query += " AND (" + " OR ".join(keyword_clauses) + ")"

    cursor.execute(query, params)
    results = cursor.fetchall()
    cursor.close()
    conn.close()
    return results


# ✅ Clean chatbot generator with Groq
def generate_chatbot_response(era, user_input):
    tone = era_tones.get(era.lower(), "")
    keywords = [w.strip().lower() for w in user_input.split() if len(w) > 2]
    matched_products = fetch_products_from_db(era, keywords)

    if matched_products:
        product_text = product_text = "\n".join([
                f"- [{title}](/products/{title.replace(' ', '-').lower()}) — {desc}"
                for title, desc in matched_products[:5]
    ])

        product_summary = f"Here are some {era} picks you might dig:\n{product_text}"
    else:
        product_summary = "Couldn't find exact matches, but I’ve still got your back! Wanna try a different term?"

    try:
        chat_response = client.chat.completions.create(
            model="llama3-8b-8192",  # ✅ Available on Groq
            messages=[
                {"role": "system", "content": f"You are a shopping assistant from the {era} era. {tone}"},
                {"role": "user", "content": f"{user_input}\n\n{product_summary}"}
            ],
            temperature=0.7
        )
        return chat_response.choices[0].message.content.strip()
    except Exception as e:
        return f"⚠️ Error generating response: {e}"
