// App.js

import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navigation from './components/Navigation.js';
import { Container, Row, Col } from 'react-bootstrap';
import AboutSection from './components/Aboutme.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import CertificatesandAcheivements from './components/CertificatesandAcheivements.js';
function App() {
  useEffect(() => {
   
    const scrollSpy = new window.bootstrap.ScrollSpy(document.body, {
      target: '#navbar',
      offset: 80, 
    });
    scrollSpy.refresh();

   
    return () => {
      window.removeEventListener('scroll', scrollSpy);
    };
  }, []);

  return (
    <div className="App">
      <Navigation />

      <Container className="mt-4">
        <Row id="about" className="full-screen">
          <Col>
            <AboutSection></AboutSection>
          </Col>
        </Row>

        <Row className="mt-4" id="skills">
          <Col>
          <br></br>
           <Skills></Skills>
          </Col>
        </Row>

        <Row className="mt-4" id="experience">
          <Col>
            <Experience></Experience>
          </Col>
        </Row>

        <Row className="mt-4" id="projects">
          <Col>
            <Projects></Projects>
          </Col>
        </Row>
        <Row className="mt-4" id="others">
          <Col>
            <CertificatesandAcheivements></CertificatesandAcheivements>
          </Col>
        </Row>

        <Row className="mt-4" id="contact">
          <Col>
          <br></br>
           <Contact></Contact>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
