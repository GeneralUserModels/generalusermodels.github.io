import React from 'react';
import AppContent from './AppContent';
import Carousel from './components/Carousel';

const App = ({ carouselData, suggestionsData }) => {
  return (
    <div style={{ height: '80vh', overflowY: 'auto', backgroundColor: 'var(--color-main-bg)' }}>
      {/* Carousel Section */}
      <div
        style={{
          margin: '0',
          height: '250px',
          borderRadius: '8px',
          overflow: 'hidden',
          paddingBottom: '0'
        }}
      >
        <Carousel carouselData={carouselData} />
      </div>
      {/* App Section */}
      <div
        style={{
          margin: '10px',
          padding: '10px',
          paddingTop: '0',
          marginTop: '0'
        }}
      >
        <h2 className="appTitle" style={{ color: 'var(--color-main-text)' }}>
          Horizon App
        </h2>
        <div
          style={{
            border: '1px solid rgba(204, 204, 204, 0.5)',
            borderRadius: '8px',
            height: '80vh'
          }}
        >
          <AppContent suggestionsData={suggestionsData} />
        </div>
      </div>
    </div>
  );
};

export default App;
