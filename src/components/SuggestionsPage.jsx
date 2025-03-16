// src/components/SuggestionsPage.jsx
import React, { useEffect, useState } from 'react';
import suggestionsData from '../data/suggestions.json';
import SuggestionItem from './SuggestionItem';

const SuggestionsPage = () => {
  const [suggestions, setSuggestions] = useState([]);

  // Track window width to decide if we use "fixed" or "dynamic" layout.
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Load dummy suggestions
    setSuggestions(suggestionsData);

    // Listen for window resizes
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mimic the Swift code’s logic:
  const isFixedLayout = windowWidth >= 920;
  const fixedLeftPadding = 100;
  const fixedCardWidth = 1100;
  const dynamicLeftPadding = 50;
  const dynamicRightPadding = 20;

  return (
    <div
      className="page-content"
      style={{
        // Remove any extra centering or container styles so we can manage padding ourselves
        padding: 0,
        // If you’re not using your existing CSS classes for background color, ensure it’s #282828
        backgroundColor: '#282828'
      }}
    >
      {/* Title, with top/bottom spacing and left padding */}
      <div
        style={{
          paddingLeft: isFixedLayout ? fixedLeftPadding : dynamicLeftPadding,
          paddingTop: 50,
          paddingBottom: 30
        }}
      >
        <h1
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            margin: 0,
            color: '#d6ceba', // matches Color.mainText
            paddingBottom: 10
          }}
        >
          Suggestions
        </h1>
      </div>

      {/* Render each suggestion with the same left padding as the title.
          If we’re in a wide layout, enforce a max width of 800px (like Swift’s fixedCardWidth). */}
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          style={{
            marginLeft: isFixedLayout ? fixedLeftPadding : dynamicLeftPadding,
            marginRight: isFixedLayout
              ? windowWidth - (fixedLeftPadding + fixedCardWidth)
              : dynamicRightPadding,
            maxWidth: isFixedLayout ? fixedCardWidth : 'auto',
            marginBottom: 20
          }}
        >
          <SuggestionItem suggestion={suggestion} />
        </div>
      ))}
    </div>
  );
};

export default SuggestionsPage;
