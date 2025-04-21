import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Modal,
  Form,
} from 'react-bootstrap';
import dog4 from '../assets/dog4.jpg'
import dog5 from '../assets/dog5.jpg'
import dog6 from '../assets/dog6.jpg'


const featuredDogs = [
  { id: 'f4', image: dog4, name: 'Roscoe (4 years old)', description: 'An energetic trickster who loves fetch and belly rubs.' },
  { id: 'f5', image: dog5, name: 'Lola (2 years old)',   description: 'A gentle cuddle‑bug always ready for snuggles and story time.' },
  { id: 'f6', image: dog6, name: 'Winston (6 years old)',    description: 'A dignified gentleman with a soft spot for long walks.' }
];

export default function Gallery() {
  const [dogs, setDogs]           = useState([]);
  const [loading, setLoading]     = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData]   = useState({
    name: '', description: ''
  });
  const [editingId, setEditingId] = useState(null);

  const API = '/api/dogs'; 
  const loadDogs = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(API);
      setDogs(data);
    } catch (err) {
      console.error('Error loading dogs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDogs();
  }, []);

  // add
  const openAdd = () => {
    setEditingId(null);
    setFormData({ name: '', description: '' });
    setShowModal(true);
  };

  // edit
  const openEdit = dog => {
    setEditingId(dog._id);
    setFormData({ name: dog.name, description: dog.description });
    setShowModal(true);
  };

  // update
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API}/${editingId}`, formData);
      } else {
        await axios.post(API, formData);
      }
      setShowModal(false);
      loadDogs();
    } catch (err) {
      console.error('Error saving dog:', err);
    }
  };

  // delete 
  const handleDelete = async id => {
    if (!window.confirm('Delete this dog?')) return;
    try {
      await axios.delete(`${API}/${id}`);
      loadDogs();
    } catch (err) {
      console.error('Error deleting dog:', err);
    }
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">🐾 Gallery</h2>

      <Row className="mb-5">
  {featuredDogs.map(dog => (
    <Col md={4} key={dog.id} className="mb-3">
      <Card>
        {/* image */}
        <Card.Img
          variant="top"
          src={dog.image}
          style={{ height: '300px', objectFit: 'cover' }}
        />

        {/* caption */}
        <Card.Body className="text-center">
          <Card.Title style={{ fontWeight: 'bold' }}>
            {dog.name}
          </Card.Title>
          <Card.Text>{dog.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
      <Button onClick={openAdd} className="mb-3">
        + Add New Dog
      </Button>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row>
          {dogs.map(dog => (
            <Col md={4} key={dog._id} className="mb-4">
              <Card>
                <Card.Body className="text-center">
                  <Card.Title>{dog.name}</Card.Title>
                  <Card.Text>{dog.description}</Card.Text>
                  <div className="d-flex justify-content-center gap-2">
                    <Button
                      size="sm"
                      variant="outline-primary"
                      onClick={() => openEdit(dog)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => handleDelete(dog._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Add/Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingId ? 'Edit Dog' : 'Add Dog'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={formData.name}
                onChange={e =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.description}
                onChange={e =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}
