import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import weather from "./images/Screenshot_2-7-2024_1218_bavya295.github.io.jpeg";
import quiz from "./images/Screenshot_2-7-2024_121923_bavya295.github.io.jpeg";
import airline from "./images/Screenshot_2-7-2024_12029_github.com.jpeg";
import '../styles/Projects.css'; 
const Projects = () => {
  const projects = [
    {
      title: 'Weather Website',
      description: 'A website to check weather conditions.',
      image: weather,
      techstack:"React.js , Bootstrap , API",
      link: "https://bavya295.github.io/Weather-website/"
    },
    {
      title: 'Quiz Website',
      description: 'An interactive quiz platform.',
      image: quiz,
      techstack:"React.js , Bootstrap",
      link: "https://bavya295.github.io/tnpsc-quiz-website/"
    },
    {
      title: 'Airline Management System',
      description: 'A system for managing airline operations.',
      image: airline,
      techstack:"Java , MySQL",
      link: "https://github.com/bavya295/Airline-java"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="mt-4">
      <Container>
        <h2 className="text-center mb-4 project-title">Projects</h2>
        <Row>
          <Col md={10} className="mx-auto">
            <Carousel controls={true} indicators={false} interval={null}>
              {projects.map((project, index) => (
                <Carousel.Item key={index}>
                  <Card className="border-0 shadow">
                  <br></br>
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <br></br>
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                      style={{ maxHeight: '400px', objectFit: 'contain' }}
                    />
                    <Card.Body>
                     
                      <h6>{project.techstack}</h6>
                      <Card.Text className="project-description">{project.description}</Card.Text>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn project-button">View Project</a>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
