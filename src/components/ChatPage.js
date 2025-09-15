import React, { useState } from 'react';
import './ChatPage.css';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! How are you feeling today? I'm here to help with your mental wellness journey.",
      sender: 'ai',
      timestamp: new Date()
    },
    {
      id: 2,
      text: "I've been feeling a bit anxious lately. Can you help?",
      sender: 'user',
      timestamp: new Date()
    },
    {
      id: 3,
      text: "Of course! Let's try some breathing exercises together. First, let's start with a simple 4-7-8 breathing technique...",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-header-left">
            <div className="chat-icon">
              <i className="fas fa-robot"></i>
            </div>
            <div className="chat-info">
              <h3>MindCare AI Assistant</h3>
              <div className="online-status">
                <div className="status-dot"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
            >
              <div className="message-content">
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="chat-input" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="message-input"
          />
          <button type="submit" className="send-button">
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>

      <div className="mood-tabs">
        <div className="mood-tab active">Anxious</div>
        <div className="mood-tab">Happy</div>
        <div className="mood-tab">Excited</div>
        <div className="mood-tab">Calm</div>
        <div className="mood-tab">Neutral</div>
        <div className="mood-tab">Sad</div>
      </div>

      <div className="footer-badge">
        <span className="bolt-icon">b</span>
        <span>Made in Bolt</span>
      </div>
    </div>
  );
};

export default ChatPage;
