// src/pages/Apply.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Apply.css';


function Apply() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2>Adoption Guidelines</h2>
          <ul>
            <li>Must be 18+ years old</li>
            <li>Consent from all household members</li>
            <li>Proper environment for a pet</li>
          </ul>
          <p>Please complete the application to help us understand your experience and preferences.</p>
        </Col>
        <Col md={6}>
          <h2>Application Form</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="john@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="123-456-7890" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="1234 Bark St, Dogtown, CA" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Tell us about your home and experience with dogs." />
            </Form.Group>
            <Button type="submit" className="apply-submit-btn">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Apply;
