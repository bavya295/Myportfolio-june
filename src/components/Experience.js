import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Experience.css'; 
import 'animate.css/animate.min.css';
const Experience = () => {
  useEffect(() => {
    const options = {
      threshold: 0.2, 
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    }, options);

   
    document.querySelectorAll('.experience-card').forEach(card => {
      cardObserver.observe(card);
    });

    return () => cardObserver.disconnect(); t
  }, []);

  const experienceData = [
    {
      company: 'Baoiam Innovations private limited',
      position: 'Web Developer Intern',
      duration: 'Nov 2023 - Feb 2024',
      description: 'Worked on front-end development of live projects. Created responsive web pages using Bootstrap. Led the team of 5 interns and delivered tasks efficiently on time.',
    },
   
  ];

  return (
    <section id="experience" className="mt-4">
      <Container className="experience-container"> {/* Apply the shadow effect class */}
        <h2 className="text-center mb-4">Experience</h2>
        {experienceData.map((experience, index) => (
          <Row key={index} className="mb-4">
            <Col md={6} className="mx-auto">
              <Card className="border-0 shadow experience-card">
                <Card.Body>
                  <Card.Title className="card-title">{experience.position}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{experience.company}</Card.Subtitle>
                  <Card.Text className="card-text">{experience.duration}</Card.Text>
                  <Card.Text className="card-text">{experience.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Experience;
