import React, { useEffect, useState } from 'react';

const AnimatedRow = ({ row, rowIndex }) => {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '15px'
      }}
    >
      <div
        style={{
          display: 'flex',
          animation: 'marquee var(--animation-duration) linear infinite'
        }}
      >
        {row.map((card, i) => {
          const isFirstCardInSecondRow = rowIndex === 1 && i === 0;
          return (
            <div
              key={card.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FFFFF0',
                borderRadius: '8px',
                padding: '10px',
                paddingTop: '3px',
                paddingBottom: '3px',
                marginRight: '10px',
                paddingRight: '0px',
                flex: '0 0 175px',
                marginLeft: isFirstCardInSecondRow ? '95px' : '0'
              }}
            >
              <div
                style={{
                  width: '135px',
                  color: '#333',
                  fontFamily: 'sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.2'
                }}
              >
                {card.text}
              </div>
              <div
                style={{
                  width: '1px',
                  backgroundColor: '#888888',
                  height: '40px',
                  margin: '0 2px'
                }}
              ></div>
              <div
                style={{
                  flex: 1,
                  fontWeight: 'bold',
                  fontSize: '17px',
                  color: '#333',
                  textAlign: 'center'
                }}
              >
                {card.value}
              </div>
            </div>
          );
        })}
        {row.map((card, i) => {
          return (
            <div
              key={`${card.id}-dup`}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FFFFF0',
                borderRadius: '8px',
                padding: '10px',
                paddingTop: '3px',
                paddingBottom: '3px',
                marginRight: '10px',
                paddingRight: '0px',
                flex: '0 0 175px'
              }}
            >
              <div
                style={{
                  width: '135px',
                  color: '#333',
                  fontFamily: 'sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.2'
                }}
              >
                {card.text}
              </div>
              <div
                style={{
                  width: '1px',
                  backgroundColor: '#888888',
                  height: '60px',
                  margin: '0 2px'
                }}
              ></div>
              <div
                style={{
                  flex: 1,
                  fontWeight: 'bold',
                  fontSize: '17px',
                  color: '#333',
                  textAlign: 'center'
                }}
              >
                {card.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Carousel = ({ carouselData }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Calculate animation duration based on screen width
  // Smaller screens get faster animation to compensate
  const animationDuration = Math.max(15, screenWidth / 50);
  
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        padding: '0px',
        boxSizing: 'border-box',
        '--animation-duration': `${animationDuration}s`
      }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      <h2
        style={{
          color: 'var(--color-main-text)',
          textAlign: 'left',
          marginBottom: '20px',
        }}
      >
        General User Model
      </h2>
      {carouselData.map((row, index) => (
        <AnimatedRow key={index} row={row} rowIndex={index} />
      ))}
    </div>
  );
};

export default Carousel;
