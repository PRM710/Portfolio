// src/MobileMessage.js
import React, { useEffect, useState } from 'react';

const MobileMessage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile based on screen width or user agent
    const checkIfMobile = () => {
      if (/Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent) || window.innerWidth < 768) {
        setIsMobile(true);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile); // Optional: Update on resize

    return () => window.removeEventListener("resize", checkIfMobile); // Cleanup on unmount
  }, []);

  return (
    isMobile && (
      <div style={overlayStyle}>
        Responsive design is under development. Please access the site on a PC or laptop. Thank you for your understanding!
      </div>
    )
  );
};

// Inline CSS for the overlay message
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: 'white',
  fontSize: '1.5em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '20px',
  zIndex: 1000,
  boxSizing: 'border-box'
};

export default MobileMessage;
