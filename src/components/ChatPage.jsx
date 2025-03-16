import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import suggestionsData from '../data/suggestions.json';

const ChatPage = ({ onOpenChat }) => {
  const { id } = useParams();
  const [suggestion, setSuggestion] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const suggestionId = parseInt(id, 10);
    const found = suggestionsData.find((item) => item.id === suggestionId);
    setSuggestion(found || null);
  }, [id]);

  // Mark chat as active
  useEffect(() => {
    if (suggestion) {
      onOpenChat(suggestion);
    }
  }, [suggestion, onOpenChat]);

  const handleSend = () => {
    if (newMessage.trim()) {
      console.log('User typed:', newMessage);
      setNewMessage('');
    }
  };

  if (!suggestion) {
    return (
      <div className="page-content">
        <p>Suggestion not found.</p>
      </div>
    );
  }

  return (
    <div className="chat-container">

      <h2>{suggestion.title}</h2>

      <div className="chat-messages">
        {suggestion.chats.map((chat, index) => {
          const isAssistant = chat.role === 'assistant';
          return (
            <div
              key={index}
              className={`chat-bubble ${
                isAssistant ? 'chat-bubble-assistant' : 'chat-bubble-user'
              }`}
            >
              <div className="chat-bubble-content">
                {chat.message}
              </div>
            </div>
          );
        })}
      </div>

      {/* Updated input bar */}
      <div className="chat-input-bar">
        <input
          className="chat-text-editor"
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            // If user presses Enter (without Shift), send the message
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <button className="chat-send-icon" onClick={handleSend}>
          {/* Paper plane icon (similar to "paperplane.fill") */}
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            style={{ width: '16px', height: '16px' }}
          >
            <path d="M15.864 1.153a.75.75 0 0 1 .132.805l-5.5 13A.75.75 0 0 1 9 15a.73.73 0 0 1-.21-.031.75.75 0 0 1-.466-.45l-1.708-4.87-4.871-1.708a.75.75 0 0 1-.45-.466.75.75 0 0 1 .016-.57A.75.75 0 0 1 1 7l13-5.5a.75.75 0 0 1 .864.153z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
