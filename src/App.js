import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SuggestionsPage from './components/SuggestionsPage';
import ChatPage from './components/ChatPage';

const App = () => {
  // Track active chats as an array of suggestion objects
  const [activeChats, setActiveChats] = useState([]);

  // Function to add a suggestion to the active chats list (no duplicates)
  const handleOpenChat = (suggestion) => {
    setActiveChats((prev) => {
      const alreadyActive = prev.some((s) => s.id === suggestion.id);
      return alreadyActive ? prev : [...prev, suggestion];
    });
  };

  return (
    <div className="app-container">
      {/* Navbar with active chats listed */}
      <Navbar activeChats={activeChats} />

      {/* Main content area */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<SuggestionsPage />} />
          {/* Pass handleOpenChat to ChatPage so it can register active chats */}
          <Route
            path="/chat/:id"
            element={<ChatPage onOpenChat={handleOpenChat} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
