import React, { useState, useRef, useEffect } from 'react';

// A custom slider component that replicates the SwiftUI style
function FancySlider({ min, max, step, value, onChange }) {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // When dragging, track mouse movement and update value
  useEffect(() => {
    function handleMouseMove(e) {
      if (!isDragging || !sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const clampedX = Math.max(0, Math.min(x, rect.width));
      const ratio = clampedX / rect.width;
      let newValue = min + ratio * (max - min);

      // Round to nearest step
      newValue = Math.round(newValue / step) * step;
      onChange(newValue);
    }

    function handleMouseUp() {
      setIsDragging(false);
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, min, max, step, onChange]);

  // Start dragging when user presses mouse down on the knob
  const startDrag = () => setIsDragging(true);

  // Compute how far the fill/knob should be, as a ratio [0..1]
  const ratio = (value - min) / (max - min);

  return (
    <div
      ref={sliderRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '20px'
      }}
    >
      {/* Background track (gray-ish) */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          width: '100%',
          height: '4px',
          backgroundColor: 'rgba(214, 206, 186, 0.3)',
          borderRadius: '2px'
        }}
      />
      {/* Filled track up to knob (cream color #d6ceba) */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          width: `${ratio * 100}%`,
          height: '4px',
          backgroundColor: '#d6ceba',
          borderRadius: '2px'
        }}
      />
      {/* Circular knob */}
      <div
        onMouseDown={startDrag}
        style={{
          position: 'absolute',
          top: '50%',
          left: `calc(${ratio * 100}% - 10px)`,
          transform: 'translateY(-50%)',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#d6ceba',
          cursor: 'pointer'
        }}
      />
    </div>
  );
}

const LeftPane = () => {
  // Timer state from 9..21 (9AM..9PM)
  const [timeValue, setTimeValue] = useState(13); // default to 1PM
  // Activity text
  const [activity] = useState('creating a sales presentation for Coca-Cola');

  // Convert numeric hour to “1:00 PM” style
  const formatTime = (hour) => {
    const isPM = hour >= 12;
    const displayHour = hour > 12 ? hour - 12 : hour;
    const suffix = isPM ? 'PM' : 'AM';
    return `${displayHour}:00 ${suffix}`;
  };

  // Called whenever the slider changes
  const handleTimeChange = (newVal) => {
    setTimeValue(newVal);
  };

  // Style for the highlight background behind time/activity text
  const highlightStyle = {
    display: 'inline-block',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    boxDecorationBreak: 'clone',
    WebkitBoxDecorationBreak: 'clone',
    padding: '2px 4px',
    borderRadius: '4px'
  };

  // Style for the horizontal divider lines between sections
  const dividerStyle = {
    width: '80%',
    border: 'none',
    borderTop: '1px solid #666'
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      {/* 1) TIMER SELECTOR SECTION */}
      <div>
        <p style={{ margin: '0 0 20px 0', fontSize: '18px' }}>
          It is{' '}
          <span style={highlightStyle}>
            {formatTime(timeValue)}
          </span>
        </p>

        <div style={{ width: '200px', margin: '0 auto' }}>
          {/* Our custom slider replicating SwiftUI design */}
          <FancySlider
            min={9}
            max={21}
            step={1}
            value={timeValue}
            onChange={handleTimeChange}
          />
        </div>
      </div>

      <hr style={dividerStyle} />

      {/* 2) ACTIVITY SHOWER SECTION */}
      <div>
        <p style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
          The user is now{' '}
          <span style={highlightStyle}>
            {activity}
          </span>
        </p>

        <div
          style={{
            border: '2px dashed #999',
            height: '200px',
            width: '100%',
            maxWidth: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto'
          }}
        >
          <span style={{ fontSize: '14px', color: '#999' }}>GIF Screen</span>
        </div>
      </div>

      <hr style={dividerStyle} />

      {/* 3) PROPOSITIONS SECTION */}
      <div style={{ width: '100%', maxWidth: '300px' }}>
        <h3 style={{ margin: '0 0 10px 0' }}>New User Model Propositions</h3>

        {/* SCROLLABLE LIST CONTAINER */}
        <div
          style={{
            height: '150px',
            overflowY: 'auto',
            border: 'none',
            borderRadius: '4px',
            padding: '5px'
          }}
        >
          <ul
            style={{
              margin: 0,
              paddingLeft: 0,
              lineHeight: '1.6',
              textAlign: 'left'
            }}
          >
            <li style={{ listStyle: 'none' }}>- Sample Proposition 1</li>
            <li style={{ listStyle: 'none' }}>- Sample Proposition 2</li>
            <li style={{ listStyle: 'none' }}>- Sample Proposition 3</li>
            <li style={{ listStyle: 'none' }}>- Sample Proposition 4</li>
            <li style={{ listStyle: 'none' }}>- Sample Proposition 5</li>
            <li style={{ listStyle: 'none' }}>- Sample Proposition 6</li>
            <li style={{ listStyle: 'none' }}>- Sample Proposition 7</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
