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
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* GIFs at the top left and right */}
      <img src="./miniwiz.gif" alt="Left GIF" className="top-left-gif-home" />
      <img src="/Moonclick.gif" alt="Left GIF" className="top-left-gif-home1" />
      <img src="./catto.gif" alt="Right GIF" className="top-right-gif-home" />
      <img src="./meow.png" alt="Right GIF" className="top-right-gif-home1" />

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
  href="https://drive.google.com/file/d/1h5Hg8tyiU_P9vW2JaDhHG4doeRFE9XS5/view?usp=drive_link"
  className="download-button" 
  onClick={(e) => {
    e.preventDefault(); // Prevent navigation
    playSound(); // Play sound on click

    // Trigger download
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1h5Hg8tyiU_P9vW2JaDhHG4doeRFE9XS5/view?usp=drive_link"; // Link to resume
    link.download = "PRAKASH_MANE_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
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
