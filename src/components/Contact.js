import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css'; // Import your CSS file for styling

const Contact = () => {
  return (
    <>
    <h2>Contact Details</h2>
    <div className="contact-container">
      
      <div className="contact-info">
        <p><FontAwesomeIcon icon={faEnvelope} /> Email: bavya295@gmail.com</p>
        <p><FontAwesomeIcon icon={faPhone} /> Phone: +91 9791460973</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Location: Coimbatore, India</p>
      </div>
    </div>
    <footer className="footer mt-4">
        <div className="container">
          <p>&copy; 2024 Bavya R. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
