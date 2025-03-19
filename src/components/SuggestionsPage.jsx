// src/components/SuggestionsPage.jsx
import React, { useEffect, useState } from 'react';
import suggestionsData from '../data/suggestions.json';
import SuggestionItem from './SuggestionItem';

const SuggestionsPage = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Load dummy suggestions
    setSuggestions(suggestionsData);
  }, []);

  return (
    <div
      className="page-content"
      style={{
        padding: 0,
        backgroundColor: '#282828'
      }}
    >
      {/* Title Section */}
      <div
        style={{
          padding: '30px 0 10px 5%' // top, right, bottom, left (5% gives a little left margin)
        }}
      >
        <h1
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 20,
            color: '#d6ceba',
            // paddingBottom: 10
          }}
        >
          Suggestions
        </h1>
      </div>

      {/* Suggestions List */}
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          style={{
            width: '85%',          // Each suggestion takes up 90% of the parent width
            margin: '0 auto 20px'    // Centered horizontally with a bottom margin of 20px
          }}
        >
          <SuggestionItem suggestion={suggestion} />
        </div>
      ))}
    </div>
  );
};

export default SuggestionsPage;
