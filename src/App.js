import React from 'react';
import AppContent from './AppContent';
import Carousel from './components/Carousel';

const App = ({ carouselData, suggestionsData }) => {
  return (
    <div style={{ backgroundColor: 'var(--color-main-bg)' }}>
      {/* Carousel Section */}

      {/* App Section */}
      <div
        style={{
          margin: '0px',
          padding: '0px',
          paddingTop: '0',
          marginTop: '0'
        }}
      >
        <div
          // style={{
          //   border: '1px solid rgba(204, 204, 204, 0.5)',
          //   borderRadius: '8px',
          //   height: '80vh'
          // }}
        >
          <AppContent suggestionsData={suggestionsData} />
        </div>
      </div>
    </div>
  );
};

export default App;
