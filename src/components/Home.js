import React from 'react';
import '../styles/Home.css';

function Home() {
  // Function to play sound
  const playSound = () => {
    const audio = new Audio('/download.mp3'); // Path to your sound file
    audio.play();
  };

  return (
    <div className='box1'>
      <h1>Thank you for stopping by!</h1>
      <p>
        My name is Prakash Mane, and I’m currently pursuing a Bachelor's degree in Computer Science Engineering.
        I specialize in web development and problem-solving, Basics of Blockchain with strong skills in Python, Java, Javascript, and various web development frameworks and cloud platforms.
      </p>
      
      <p>
        If you'd like to learn more about me, please check out my resume below:
      </p>
      
      {/* Downloadable Resume Button */}
      <a 
        href="https://github.com/PRM710/Portfolio/blob/master/public/PRAKASH_MANE_RESUME.pdf"  // Corrected href attribute
        download="PRAKASH_MANE_RESUME.pdf" 
        className="download-button" 
        onClick={playSound} // Play sound on click
      >
        <div className="centre">Download My Resume</div>
      </a>
      
      <p>
        Thanks again for visiting my portfolio—have fun exploring!
      </p>
      <img src="/retrobackground.jpg" alt="Decorative" className="bottom-image" />
    </div>
  );
}

export default Home;
