import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import "../styles/Skills.css";
import bs from "./images/bootstrap-svgrepo-com.svg";
import ds from "./images/data-trends-svgrepo-com.svg";
import git from "./images/git-svgrepo-com.svg";
import java from "./images/java-svgrepo-com.svg";
import js from "./images/js-official-svgrepo-com.svg";
import mongo from "./images/mongo-svgrepo-com.svg";
import c from "./images/programming-code-signs-svgrepo-com.svg";
import reactLogo from "./images/react-1-logo-svgrepo-com.svg";
import sql from "./images/sql-file-format-svgrepo-com.svg";
import html from "./images/html-5-svgrepo-com.svg";

const skillsData = [
  {
    name: 'React.js',
    logo: reactLogo,
    description: 'A JavaScript library for building user interfaces.',
  },
  {
    name: 'Bootstrap',
    logo: bs,
    description: 'A CSS framework for developing responsive websites.',
  },
  {
    name: 'JavaScript',
    logo: js,
    description: 'A high-level programming language for Web applications',
  },
  {
    name: 'Java',
    logo: java,
    description: 'A widely used object-oriented programming language scalable applications.',
  },
  {
    name: 'C programming',
    logo: c,
    description: 'A foundational programming language known for its efficiency ,performance and features.',
  },
  {
    name: 'Data Structures and Algorithms',
    logo: ds,
    description: 'Fundamental concepts and techniques essential for writing efficient computer programs.',
  },
  {
    name: 'Git',
    logo: git,
    description: 'A distributed version control system for tracking changes in source code during software development.',
  },
  {
    name: 'HTML5, CSS',
    logo: html,
    description: 'Core technologies used for  defining the structure and styling web pages in applications.',
  },
  {
    name: 'SQL',
    logo: sql,
    description: 'A domain-specific language used for managing and querying relational databases.',
  },
  {
    name: 'MongoDB',
    logo: mongo,
    description: 'A NoSQL database program that uses JSON-like documents with optional schemas.',
  }
  // Add more skills as needed
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Row className="mt-4" id="skills" ref={ref}>
      <Col>
      
        <h2>Skills</h2>
        <br>
        </br>
        <br></br>
        <br></br>
        <Row>
          {skillsData.map((skill, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-100">
                  <Card.Img variant="top" src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                  <Card.Body>
                    <Card.Title className="skill-title">{skill.name}</Card.Title>
                    <Card.Text>{skill.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Skills;
