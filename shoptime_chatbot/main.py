from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from chatbot_engine import generate_chatbot_response  # your Groq chatbot logic

app = FastAPI()

# Allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 🔒 for production, restrict to your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    era: str  # pass era from frontend

@app.post("/chat")
def chat_with_bot(req: ChatRequest):
    reply = generate_chatbot_response(req.era, req.message)
    return {"reply": reply}
