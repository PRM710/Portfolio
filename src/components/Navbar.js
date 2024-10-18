import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

// Function to create audio with a specified initial volume
const createAudio = (src, volume = 0.5) => {
  const audio = new Audio(src);
  audio.volume = volume; // Set initial volume
  return audio;
};

function Navbar() {
  const [volume, setVolume] = useState(0.5);
  const [clickSound, setClickSound] = useState(null);
  const [hoverSound, setHoverSound] = useState(null);
  const [backgroundMusic1, setBackgroundMusic1] = useState(null);
  const [backgroundMusic2, setBackgroundMusic2] = useState(null);

  useEffect(() => {
    // Initialize sounds
    setClickSound(createAudio('/coin.mp3'));
    setHoverSound(createAudio('/hover.mp3'));

    // Initialize background music with different volumes
    const music1 = createAudio('/cricket.mp3', 0.2); // Lower volume for cricket sound
    const music2 = createAudio('/campfiremusic.mp3', 1); // Higher volume for campfire music
    music1.loop = true; // Loop the music
    music2.loop = true; // Loop the music
    setBackgroundMusic1(music1);
    setBackgroundMusic2(music2);

    // Play both background music tracks
    music1.play().catch((error) => {
      console.error('Error playing background music 1:', error);
    });
    music2.play().catch((error) => {
      console.error('Error playing background music 2:', error);
    });
  }, []);

  // Function to play the click sound on link click
  const playClickSound = () => {
    if (clickSound) {
      clickSound.currentTime = 0; // Reset the sound to start
      clickSound.volume = volume; // Update the volume
      clickSound.play().catch((error) => {
        console.error('Error playing click sound:', error);
      });
    }
  };

  // Function to play the hover sound on hover
  const playHoverSound = () => {
    if (hoverSound) {
      hoverSound.currentTime = 0; // Reset the sound to start
      hoverSound.volume = volume; // Update the volume
      hoverSound.play().catch((error) => {
        console.error('Error playing hover sound:', error);
      });
    }
  };

  // Function to handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (clickSound) clickSound.volume = newVolume; // Update click sound volume
    if (hoverSound) hoverSound.volume = newVolume; // Update hover sound volume
    if (backgroundMusic1) backgroundMusic1.volume = newVolume * 0.4; // Scale volume for cricket sound
    if (backgroundMusic2) backgroundMusic2.volume = newVolume * 0.8; // Scale volume for campfire sound
  };

  return (
    <div className="container">
      <div className="container2">
        {/* Add your GIF logo */}
        <Link to="/" onClick={playClickSound}>
          <img src="\moon.png" alt="Logo GIF" className="logo" />
        </Link>
        {/* Navigation List */}
        <ul className="nav-list">
          {['/certificates', '/projects', '/aboutme'].map((path, index) => (
            <li key={path}>
              <Link to={path} onClick={playClickSound} onMouseEnter={playHoverSound}>
                {['Certificates!', 'Projects and fun!', 'About Me!'][index]}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sound Controller */}
        <div className="sound-controller">
          <label htmlFor="volume">Volume Control:</label>
          <input 
            type="range" 
            id="volume" 
            name="volume" 
            min="0" 
            max="1" 
            step="0.01" 
            value={volume} 
            onChange={handleVolumeChange} 
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
