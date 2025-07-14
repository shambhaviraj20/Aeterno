import React, { useState } from 'react';
import './ChatbotWidget.css';

const ChatbotWidget = ({ selectedEra }) => {  // ✅ Accept selectedEra as prop
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '🛍️ Hey there! How can I help you shop today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          era: selectedEra  // ✅ Use actual prop value, not string
        })
      });

      const data = await res.json();
      const botMessage = { sender: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: '❌ Could not reach assistant server.' }
      ]);
    }
  };

  return (
    <div className="chatbot-widget">
      {open ? (
        <div className="chat-box">
          <div className="chat-header">
            <span>🧠 ShopTime Assistant</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.sender}`}>
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask me something..."
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      ) : (
        <button className="chat-toggle" onClick={() => setOpen(true)}>
          💬
        </button>
      )}
    </div>
  );
};

export default ChatbotWidget;
