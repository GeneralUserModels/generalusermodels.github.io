import React, { useState } from 'react';
import LeftPane from './LeftPane';
import App from '../App';
import dynamicData from '../data/dynamicData.json';
import { DynamicDataProvider } from '../context/DynamicDataContext';

const DemoPage = () => {
  const [selectedHour, setSelectedHour] = useState(13); // Default to 1 PM

  // Ensure we match the key type in dynamicData (keys as strings)
  const currentData = dynamicData[selectedHour.toString()] || { carousel: [], suggestions: [], activity: "" };

  const handleTimeChange = (newHour) => {
    setSelectedHour(newHour);
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ marginBottom: '10px', textAlign: 'center' }}>Horizon Demo</h1>
      <p style={{ marginBottom: '20px', textAlign: 'center' }}>
        This is a demonstration of Horizon. It helps you manage projects, suggestions, and chats...
      </p>
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Left Pane with the slider and dynamic activity */}
        <div
          style={{
            flex: '1.1',
            height: '450px',
            border: '1px solid rgba(204, 204, 204, 0.5)',
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        >
          <LeftPane
            selectedHour={selectedHour}
            onTimeChange={handleTimeChange}
            activity={currentData.activity}
          />
        </div>

        {/* Right Pane with the main App wrapped in the Dynamic Data Provider */}
        <div
          style={{
            flex: '2.9',
            minHeight: '600px',
            border: '1px solid rgba(204, 204, 204, 0.5)',
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        >
          <DynamicDataProvider selectedHour={selectedHour} currentData={currentData}>
            <App 
              carouselData={currentData.carousel} 
              suggestionsData={currentData.suggestions} 
            />
          </DynamicDataProvider>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
