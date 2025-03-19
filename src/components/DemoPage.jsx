import React from 'react';
import LeftPane from './LeftPane';
import App from '../App';

const DemoPage = () => {
  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ marginBottom: '10px', textAlign: 'center' }}>Horizon Demo</h1>
      <p style={{ marginBottom: '20px', textAlign: 'center' }}>
        This is a demonstration of Horizon. It helps you manage projects, suggestions,
        and chats seamlessly...
      </p>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Left Pane with border & corner radius */}
        <div
          style={{
            flex: '1.25',
            minHeight: '600px',
            border: '1px solid rgba(204, 204, 204, 0.5)',
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        >
          <LeftPane />
        </div>

        {/* Right Pane (Horizon demo) with border & corner radius */}
        <div
          style={{
            flex: '2.75',
            minHeight: '600px',
            border: '1px solid rgba(204, 204, 204, 0.5)', // 50% opacity border
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        >
          <App />
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
