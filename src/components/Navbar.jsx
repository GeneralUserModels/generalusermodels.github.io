import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ activeChats }) => {
  const location = useLocation();
  const [sidebarWidth, setSidebarWidth] = useState(300); // Default width

  // Handle drag to resize
  const handleMouseMove = (e) => {
    const newWidth = e.clientX < 180 ? 180 : e.clientX; // min 180px
    setSidebarWidth(newWidth);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="navbar" style={{ width: sidebarWidth }}>
      {/* Suggestions link */}
      <div style={{ marginBottom: '20px' }}>
        <Link
          to="/"
          className={`nav-link ${
            location.pathname === '/' ? 'nav-link-active' : ''
          }`}
        >
          Suggestions
        </Link>
      </div>

      {/* Active Chats */}
      <div style={{ fontSize: '.8rem', marginBottom: '10px' }}>Active Chats</div>
      <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
        {activeChats.map((chat) => {
          const isActive = location.pathname === `/chat/${chat.id}`;
          return (
            <li key={chat.id} style={{ marginBottom: '8px' }}>
              <Link
                to={`/chat/${chat.id}`}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                {chat.title}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Draggable resizer handle */}
      <div className="resizer" onMouseDown={handleMouseDown}></div>
    </div>
  );
};

export default Navbar;
