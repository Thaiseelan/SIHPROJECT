// Chatbot.js
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Chatbot({ onBack }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setIsLoading(true);

    // Add thinking indicator
    const thinkingId = Date.now();
    setMessages((prev) => [...prev, { 
      sender: "assistant", 
      text: "🤔 Thinking...", 
      id: thinkingId,
      isThinking: true 
    }]);

    try { 
      const response = await fetch("http://127.0.0.1:8000/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      // Remove thinking indicator and add real response
      setMessages((prev) => 
        prev.filter(msg => msg.id !== thinkingId).concat([
          { sender: "assistant", text: data.response }
        ])
      );

    } catch (err) {
      console.error("Error:", err);
      
      // Remove thinking indicator and add error message
      setMessages((prev) => 
        prev.filter(msg => msg.id !== thinkingId).concat([
          { 
            sender: "assistant", 
            text: "⚠️ I'm having trouble connecting right now. Please make sure the server is running and try again." 
          }
        ])
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestionTexts = [
    "I'm so sad",
    "I'm feeling happy",
    "I feel anxious",
    "I need advice",
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
      {/* Top Bar with Back + History */}
      <header className="flex justify-between items-center p-4 bg-gray-950/70 border-b border-gray-800 backdrop-blur-sm">
        <button
          onClick={() => (onBack ? onBack() : (window.location.href = "/dashboard"))}
          className="text-gray-300 hover:text-green-400 transition font-medium"
        >
          ⬅ Back
        </button>
        <button
          onClick={() => alert("History feature coming soon!")}
          className="text-gray-300 hover:text-green-400 transition font-medium"
        >
          📜 History
        </button>
      </header>

      {/* Landing Header */}
      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center flex-1 text-center px-6 relative">
          {/* Animated Glow Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute w-96 h-96 bg-green-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 drop-shadow-lg mb-4">
              MindCare
            </h1>
            <h2 className="text-lg md:text-2xl text-gray-300 max-w-xl mx-auto">
              Your AI companion here to listen, guide, and support you.
            </h2>
          </motion.div>
        </div>
      )}

      {/* Chat Window */}
      {messages.length > 0 && (
        <main className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-[70%] ${
                  msg.sender === "user"
                    ? "bg-green-600 text-white rounded-br-none"
                    : msg.isThinking
                    ? "bg-gray-600 text-gray-300 rounded-bl-none animate-pulse"
                    : "bg-gray-700 text-gray-100 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </main>
      )}

      {/* Input Bar with Suggestions */}
      <footer className="p-6 bg-gray-900 border-t border-gray-700 shadow-lg">
        {/* Suggestion Chips */}
        {messages.length === 0 && (
          <div className="flex gap-2 flex-wrap mb-4">
            {suggestionTexts.map((s, i) => (
              <button
                key={i}
                onClick={() => setInput(s)}
                disabled={isLoading}
                className="px-4 py-2 bg-gray-800 hover:bg-green-600 text-sm rounded-full text-gray-300 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="flex items-center bg-gray-800 rounded-full px-4 py-3 shadow-md">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={isLoading ? "Please wait..." : "Type your feelings..."}
            rows={1}
            disabled={isLoading}
            className="flex-1 resize-none bg-transparent text-white placeholder-gray-400 focus:outline-none text-base disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="ml-3 text-green-500 hover:text-green-400 transition text-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "⏳" : "➤"}
          </button>
        </div>
      </footer>
    </div>
  );
}