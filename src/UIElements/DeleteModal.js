import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const DeleteModal = ({ show, handleDelete,id, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{textAlign : 'center'}}>Are you sure You want delete this note ?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' style={{backgroundColor : 'red',margin : 'auto'}} onClick={() => {handleDelete(id)}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
