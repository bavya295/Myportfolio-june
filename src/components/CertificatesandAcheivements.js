import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import "../styles/Certi.css";

import fccLogo from './images/freecodecamp-svgrepo-com.svg';
import nptelLogo from './images/code-square-svgrepo-com.svg';
import googleLogo from './images/google-svgrepo-com.svg';
import fist from "./images/1st-place-medal-svgrepo-com.svg";
import ach from "./images/first-place-trophy-svgrepo-com.svg";
import team from "./images/team-svgrepo-com.svg";

const CertificatesAndAchievements = () => {
  const items = [
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      description: 'Achieved first place in End semester examination',
      date: '2023',
      logo: fccLogo,
    },
    {
      title: 'Java, C, Python',
      issuer: 'NPTEL',
      description: 'Achieved first place in End semester examination',
      date: '2022 , 2023 , 2024',
      logo: nptelLogo,
    },
    {
      title: 'Foundation of Cyber Security',
      issuer: 'Google',
      description: 'Achieved first place in End semester examination',
      date: '2024',
      logo: googleLogo,
    },
    {
      title: 'Academic Excellence Award- 5th and 2nd semester',
      issuer:'KCE',
      description: 'Achieved first place in End semester examination',
      date: '2023',
      logo: fist,
    },
    {
      title: 'Best Presentation Award',
      issuer:'KCE',
      description: 'Awarded best Presentation under topic "Manufacturing of Computer chip in India"',
      date: '2022',
      logo: ach,
    },
    {
      title: 'Team Lead',
      issuer:'Baoiam Innovations',
      description: 'Got a chance to lead the team of 5 interns in past internship and completed tasks on time',
      date: '2024',
      logo: team,
    },
  ];

  const chunkSize = 3;
  const groupedItems = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    groupedItems.push(items.slice(i, i + chunkSize));
  }

  return (
    <section id="certificates-and-achievements" className="mt-4 certificates-section">
      <Container>
        <h2 className="text-center mb-4 section-title">Certificates and Achievements</h2>
        <Carousel interval={3000} pause={false}>
          {groupedItems.map((group, index) => (
            <Carousel.Item key={index}>
              <Row>
                {group.map((item, idx) => (
                  <Col key={idx} md={4}>
                    <Card className="mb-3">
                      <Card.Body className="d-flex align-items-center">
                        <img src={item.logo} alt={`${item.issuer} logo`} className="logo-img" />
                        <div className="ml-3">
                          <Card.Title class="tit">{item.title}</Card.Title>
                          
                          <h6>{item.issuer}</h6>
                          <Card.Text><small>{item.description}</small></Card.Text>
                          <Card.Text><small style={{ color: 'black', fontWeight: 'bold' }}>{item.date}</small></Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default CertificatesAndAchievements;
