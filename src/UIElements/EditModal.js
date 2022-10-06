import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

const ModalForm = ({ show, note, handleClose, editNote }) => {
  const [date, setDate] = useState(note.date);
  const [category, setCategory] = useState(note.category);
  const [description, setDescription] = useState(note.description);

  const handleUpdateNote = () => {
    const newNote = {
      id: note.id,
      date: date,
      category: category,
      description: description,
    };
    editNote(newNote);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-4" controlId="formPlaintext">
              <Form.Label column sm="2">
                Category
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-4" controlId="formPlaintext">
              <Form.Label column sm="2">
                Date
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="primary-bg" onClick={handleUpdateNote}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalForm;
