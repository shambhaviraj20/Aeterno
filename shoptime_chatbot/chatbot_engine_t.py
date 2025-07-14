from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
client = Groq(api_key=GROQ_API_KEY)

# Era tone mapping
era_tones = {
    "80s": "Use language from the 1980s with words like 'gnarly', 'rad', and 'totally'.",
    "90s": "Speak in a 90s tone using words like 'dope', 'fly', and 'awesome'.",
    "2000s": "Be chill and casual like early internet slang. Think MySpace meets mall culture.",
    "futuristic": "Use sleek, tech-savvy futuristic tone like AI bots in 2050. Use emoji and clean phrasing.",
}

# Mock data - sample products
sample_products = [
    {
        "name": "Disco Denim Jacket",
        "era_category": "80s",
        "subcategory": "Retro Disco",
        "item_category": "Jacket",
        "style": "Shiny",
        "size": "M"
    },
    {
        "name": "Pixel Tee",
        "era_category": "90s",
        "subcategory": "Arcade Style",
        "item_category": "T-Shirt",
        "style": "Pixel",
        "size": "L"
    },
    {
        "name": "Y2K Cargo Pants",
        "era_category": "2000s",
        "subcategory": "Urban",
        "item_category": "Pants",
        "style": "Baggy",
        "size": "M"
    },
    {
        "name": "NanoSuit Gen-Z",
        "era_category": "futuristic",
        "subcategory": "TechWear",
        "item_category": "Jacket",
        "style": "Smart",
        "size": "Universal"
    }
]

# Search logic
def fetch_products_from_db(era, keywords):
    era = era.lower()
    results = []
    for product in sample_products:
        if product["era_category"].lower() != era:
            continue
        if any(
            kw in product["name"].lower()
            or kw in product["subcategory"].lower()
            or kw in product["item_category"].lower()
            or kw in product["style"].lower()
            or kw in product["size"].lower()
            for kw in keywords
        ):
            results.append(product)
    return results

# Chat response generation
def generate_chatbot_response(era, user_input):
    tone = era_tones.get(era.lower(), "")
    keywords = [w.strip().lower() for w in user_input.split() if len(w) > 2]
    matched_products = fetch_products_from_db(era, keywords)

    if matched_products:
        product_text = "\n".join(
            [f"- {p['name']} ({p['item_category']}, {p['style']}, Size {p['size']})" for p in matched_products]
        )
        product_summary = f"Here are some {era} picks you might dig:\n{product_text}"
    else:
        product_summary = "Couldn't find exact matches, but I’ve still got your back! Wanna try a different term?"

    try:
        chat_response = client.chat.completions.create(
            model="llama3-8b-8192",
            messages=[
                {"role": "system", "content": f"You are a shopping assistant from the {era} era. {tone}"},
                {"role": "user", "content": f"{user_input}\n\n{product_summary}"}
            ],
            temperature=0.7
        )
        return chat_response.choices[0].message.content.strip()
    except Exception as e:
        return f"⚠️ Error generating response: {e}"
