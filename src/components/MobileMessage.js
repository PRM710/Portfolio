// src/MobileMessage.js
import React, { useEffect, useState } from 'react';
import '../styles/MobileMessage.css'; // Import the CSS file

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
      <div className="overlay"> {/* Use the CSS class */}
        Responsive design is under development. Please access the site on a PC or laptop. Thank you for your understanding!
      </div>
    )
  );
};

export default MobileMessage;
