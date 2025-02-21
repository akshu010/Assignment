import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { API_KEY } from "../utils/constants";
import "./ChatPage.css"

const ChatPage = ({ onSendMessage }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMessages([
      {
        text: "Hello! I'm your assistant. How can I help you today?",
        sender: "Bot",
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  }, []);

  const handleSend = async () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      text: newMessage,
      sender: "User",
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setLoading(true);

    if (onSendMessage) onSendMessage(userMessage);

    try {
      const response = await fetch(API_KEY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: userMessage.text }] }],
        }),
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      const aiResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm sorry, I couldn't process your request. Please try again.";

      setMessages((prev) => [
        ...prev,
        {
          text: aiResponse,
          sender: "Bot",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "An error occurred. Please try again.",
          sender: "Bot",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-page">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-wrapper ${
              msg.sender === "User" ? "user-message" : "bot-message"
            }`}
          >
            <div
              className={`message-bubble ${msg.sender.toLowerCase()}-bubble`}
            >
              <p className="message-text">{msg.text}</p>
              <div className="message-info">
                <span className="message-timestamp">{msg.timestamp}</span>
                <span className="message-separator">•</span>
                <span className="message-sender">{msg.sender}</span>
              </div>
            </div>
          </div>
        ))}

        {loading && (
          <div className="loading-indicator">
            <div className="loading-bubble">
              <div className="loading-dot purple-dot"></div>
              <div className="loading-dot blue-dot"></div>
              <div className="loading-dot pink-dot"></div>
            </div>
          </div>
        )}
      </div>

      <div className="input-container">
        <div className="input-wrapper">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message here..."
            className="input-field"
          />
          <button onClick={handleSend} className="send-button">
            <svg
              className="send-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

ChatPage.propTypes = {
  onSendMessage: PropTypes.func,
};

export default ChatPage;
