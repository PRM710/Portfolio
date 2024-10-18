import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../styles/AboutMe.css'; // Ensure this path is correct

export default function AboutMe() {
  const [feedback, setFeedback] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility

  // Handle feedback submission
  const handleFeedbackSubmit = async () => {
    if (feedback.trim()) {
      try {
        await addDoc(collection(db, 'feedback'), {
          message: feedback,
          timestamp: new Date(),
        });
        setShowPopup(true); // Show popup on successful submission
        setFeedback(''); // Reset input field
        
        // Hide popup after a few seconds
        setTimeout(() => {
          setShowPopup(false);
        }, 3000); // Adjust time as needed
      } catch (error) {
        console.error('Error submitting feedback: ', error);
        alert('Failed to submit feedback');
      }
    } else {
      alert('Please enter your feedback');
    }
  };

  return (
    <div className="box2">
      <h1 className="flicker">My Name is Prakash Mane!</h1>
      <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" rel="noopener noreferrer">
      <img src="/heli.gif" alt="Decorative GIF" className="top-right-gif" /></a>
      <p>
        <h4>
          I am a passionate developer with a keen interest in web development and coding. If you'd like to learn more about my projects, feel free to explore my portfolio below.
        </h4>
      </p>
      <div className="contact1">
        <Link to="/projects">
          <div className="here">Projects and fun!</div>
        </Link>
      </div><br></br>

      <p>Thanks for visiting my portfolio—have fun exploring!</p>

      <div>
        <div className="contact"><p>YOU CAN CONTACT ME ON:</p></div>
        <div className="contact-images">
          <a href="mailto:prakashprm710@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/mail.png" alt="Email" className="contact-image" />
          </a>
          <a href="https://www.linkedin.com/in/prakash-mane-546748263/" target="_blank" rel="noopener noreferrer">
            <img src="/linklogo.png" alt="LinkedIn" className="contact-image" />
          </a>
          <a href="https://github.com/PRM710" target="_blank" rel="noopener noreferrer">
            <img src="/gitlogo.png" alt="GitHub" className="contact-image" />
          </a>
        </div>
      </div>

      <div>
        <h3><p className="contact1">THANKS FOR VIEWING MY PROFILE. FEEDBACK WILL BE APPRECIATED:</p></h3>
        <div style={{ backgroundColor: '#212529', padding: '1rem' }} className="nes-field is-inline">
          <label htmlFor="dark_field" style={{ color: '#fff' }}></label>
          <input
            type="text"
            id="dark_field"
            className="nes-input is-dark"
            placeholder="Your feedback!"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <br />
        <button onClick={handleFeedbackSubmit} className="nes-btn is-primary">
          Submit Feedback
        </button>
        
        {showPopup && (
          <div className="popup-message">
            Thank you for your feedback!
          </div>
        )}
        
        <img src="/retrobackground2.jpg" className="bottom-image" alt="Decorative Background" />
      </div>
    </div>
  );
}
