// src/pages/LandingPage.js
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import heroDogs from '../assets/hero-dogs.jpg';
import aboutDog from '../assets/about-dog.jpg';
import dog1 from '../assets/dog1.jpg';
import dog2 from '../assets/dog2.jpg';
import dog3 from '../assets/dog3.jpg';

const featuredDogs = [
  { id: 1, image: dog1, name: 'Buddy (9 years old)', description: 'A friendly, energetic companion ready for fun adventures.' },
  { id: 2, image: dog2, name: 'Luna (1 year old)', description: 'Loves cuddling and long walks, perfect for cozy evenings.' },
  { id: 3, image: dog3, name: 'Max (3 years old)', description: 'Calm, loyal, and affectionate—your reliable best friend.' }
];


function LandingPage() {
  return (
    <div className="landing-page">
      <section
        className="hero-section d-flex align-items-center text-white"
        style={{
          background: `linear-gradient(rgba(56, 118, 29, 0.5), rgba(56, 118, 29, 0.5)), url(${heroDogs})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          minHeight: '750px',
          margin: 0,
          padding: 0,
        }}
      >
        <Container className="text-center" style={{ position: 'relative', zIndex: 2 }}>
        <h1>Find Your Pawfect Dog</h1>
          <p>Welcome to our dog adoption website. Discover your new furry friend today!</p>
          <Button
            as={Link}
            to="/apply"
            size="lg"
            className="mt-3 hero-cta"
          >
            Apply Now
          </Button>
        </Container>
      </section>
      <div style={{ marginBottom: '100px' }}></div>

      {/* ABOUT */}
      <Container className="my-5">
  <Row className="align-items-center my-5 justify-content-center">
    <Col md={6} className="text-center text-md-start">
      <h2>About Us</h2>
      <p>
        Our mission is to connect loving families with the perfect dog, creating lifelong bonds filled with love, loyalty, and joy.
        Every dog deserves a second chance and a home where they are cherished—not just for who they are, but for the unconditional love they bring.
        <br /><br />
        We work closely with shelters and foster homes to ensure each pup receives the medical care, attention, and affection they need to thrive.
        From playful puppies to wise senior dogs, we believe there's a perfect match waiting for everyone.
        <br /><br />
        Whether you're a first-time dog parent or looking to add a new companion to your pack, we make the adoption process simple, transparent, and heartwarming.
        Explore our diverse selection of adoptable dogs—each with their own unique story—and discover your new best friend today! 🐶
      </p>
    </Col>

    <Col md={6} className="text-center">
      <img
        src={aboutDog}
        alt="About Dog"
        style={{ width: '100%', borderRadius: '8px' }}
      />
    </Col>
  </Row>
      
      <div style={{ marginBottom: '100px' }}></div>

      
        {/* FEATURED DOGS SECTION */}
        <Row className="my-5">
          <Col>
            <h2 className="text-center mb-4">Featured Dogs</h2>
            <Row>
              {featuredDogs.map((dog) => (
                <Col md={4} key={dog.id} className="mb-3">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={dog.image}
                      alt={dog.name}
                      style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <Card.Body className="text-center">
                  <Card.Title style={{ fontWeight: 'bold' }}>{dog.name}</Card.Title>
                   <Card.Text>{dog.description}</Card.Text>
                  </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
