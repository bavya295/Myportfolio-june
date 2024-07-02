import React, { useEffect, useState } from 'react';
import '../styles/Aboutme.css'; // Import your CSS file for styling
import myImage from './Mypic.jpg'; // Replace with your image file
import linkedinLogo from './images/linkedin-svgrepo-com.svg'; // Replace with your LinkedIn logo path
import githubLogo from './images/github-142-svgrepo-com.svg'; // Replace with your GitHub logo path
import resumeLogo from './images/profile-1335-svgrepo-com.svg'; // Replace with your Resume logo path

const AboutMe = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const text = 'Baavya R'; 
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length-1) {
        setName(prevName => prevName + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval); 
      }
    }, 100);

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <div className="about-me-container">
      <div className="left-section">
        <img src={myImage} alt="My Image" className="profile-image" />
        <div className="social-links">
          <a href="https://www.linkedin.com/in/bavya295/" target="_blank" rel="noopener noreferrer" className="logo-button">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a href="https://github.com/bavya295" target="_blank" rel="noopener noreferrer" className="logo-button">
            <img src={githubLogo} alt="GitHub" />
          </a>
          <a href="https://drive.google.com/file/d/15kX8WFFX1FdjZFsdIgaFYXLt60acr8JU/view?usp=sharing" className="resume-link">
            View Resume
            <span className="underline"></span>
          </a>
        </div>
      </div>
      <div className="right-section">
        <h2>About Me</h2>
        <div className="name-animation">
          {name.split('').map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              {char}
            </span>
          ))}
          <p className="description">
            Adaptive IT enthusiast with a profound interest in the world of the software industry! Currently pursuing the final year of Engineering. Actively seeking opportunities to showcase my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
