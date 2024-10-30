import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../styles/AboutMe.css';

export default function AboutMe() {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  // Email validation function
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleFeedbackSubmit = async () => {
    if (feedback.trim() && email.trim() && isValidEmail(email)) {
      try {
        await addDoc(collection(db, 'feedback'), {
          email: email,
          message: feedback,
          timestamp: new Date(),
        });
        setShowPopup(true);
        setFeedback('');
        setEmail('');
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      } catch (error) {
        console.error('Error submitting feedback: ', error);
        alert('Failed to submit feedback');
      }
    } else {
      alert('Please enter a valid email and feedback');
    }
  };

  return (
    <div className="box2">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <h1 className="flicker">My Name is Prakash Mane!</h1>
      <img src="./wiseman.png" className="top-left-static" alt="Wise man static" />
      <img src="./oldman.gif" className="top-left-gif2 hidden" alt="Wise man animated" />
      <img src="./wisewords.gif" className="top-left-gif3 hidden" alt="Wise words animated" />
      <div className="top-left-static1">wiseman</div>
      <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" rel="noopener noreferrer">
        <img src="/heli.gif" className="top-right-gif" alt="Helicopter animation" />
      </a>
      <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" rel="noopener noreferrer">
        <img src="/Dontclick.gif" className="top-right-gif1" alt="Do not click sign" />
      </a>
      <p>
        <h4>
          I am a passionate developer with a keen interest in web development and coding. If you'd like to learn more about my projects, feel free to explore my portfolio below.
        </h4>
      </p>
      <div className="contact1">
        <Link to="/projects">
          <div className="here">Projects and fun!</div>
        </Link>
      </div><br />

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

        {/* Email input */}
        <div style={{ backgroundColor: '#212529', padding: '0.5rem 1rem', marginBottom: '0.1rem' }} className="nes-field is-inline">
          <label htmlFor="email_field" style={{ color: '#fff' }}>Email</label>
          <input
            type="email"
            id="email_field"
            className="nes-input is-dark"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', height: '1.5rem' }}
          />
        </div>

        {/* Feedback input */}
        <div style={{ backgroundColor: '#212529', padding: '0.5rem 1rem' }} className="nes-field is-inline">
          <label htmlFor="feedback_field" style={{ color: '#fff' }}>Feedback</label>
          <input
            type="text"
            id="feedback_field"
            className="nes-input is-dark"
            placeholder="Your feedback!"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            style={{ padding: '0.5rem 0.5rem', fontSize: '0.875rem', height: '6rem' }} // Larger height for feedback
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
