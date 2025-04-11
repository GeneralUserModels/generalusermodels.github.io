import React, { useEffect, useState } from 'react';

function FancySlider({ min, max, step, value, onChange }) {
  const sliderRef = React.useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    function handleMouseMove(e) {
      if (!isDragging || !sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const clampedX = Math.max(0, Math.min(x, rect.width));
      const ratio = clampedX / rect.width;
      let newValue = min + ratio * (max - min);
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

  const startDrag = () => setIsDragging(true);
  const ratio = (value - min) / (max - min);

  return (
    <div ref={sliderRef} style={{ position: 'relative', width: '100%', height: '20px' }}>
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

const LeftPane = ({ selectedHour, onTimeChange, activity }) => {
  // Format the hour value (e.g., 13 becomes "1:00 PM")
  const formatTime = (hour) => {
    const isPM = hour >= 12;
    const displayHour = hour > 12 ? hour - 12 : hour;
    const suffix = isPM ? 'PM' : 'AM';
    return `${displayHour}:00 ${suffix}`;
  };

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
      {/* TIMER SELECTOR SECTION */}
      <div>
        <p style={{ margin: '0 0 20px 0', fontSize: '18px' }}>
          It is{' '}
          <span
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              padding: '2px 4px',
              borderRadius: '4px'
            }}
          >
            {formatTime(selectedHour)}
          </span>
        </p>
        <div style={{ width: '200px', margin: '0 auto' }}>
          <FancySlider min={9} max={21} step={1} value={selectedHour} onChange={onTimeChange} />
        </div>
      </div>

      <hr style={dividerStyle} />

      {/* ACTIVITY SHOWCASE SECTION */}
      <div>
        <p style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
          The user is now{' '}
          <span
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              padding: '2px 4px',
              borderRadius: '4px'
            }}
          >
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
    </div>
  );
};

export default LeftPane;
