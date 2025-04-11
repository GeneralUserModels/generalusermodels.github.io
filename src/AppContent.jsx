import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SuggestionsPage from './components/SuggestionsPage';
import ChatPage from './components/ChatPage';

const AppContent = ({ suggestionsData }) => {
  const [activeChats, setActiveChats] = useState([]);

  const handleOpenChat = (suggestion) => {
    setActiveChats((prev) => {
      const alreadyActive = prev.some((s) => s.id === suggestion.id);
      return alreadyActive ? prev : [...prev, suggestion];
    });
  };

  return (
    <div className="app-container">
      <Navbar activeChats={activeChats} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<SuggestionsPage suggestionsData={suggestionsData} />} />
          <Route path="/chat/:id" element={<ChatPage onOpenChat={handleOpenChat} />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppContent;
