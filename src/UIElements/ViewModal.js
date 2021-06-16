import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ViewModal = ({ show, note, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Category: {note.category}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{note.description}</Modal.Body>
        <Modal.Footer>
          <p>{note.date}</p>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewModal;
