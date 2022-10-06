import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import ModalForm from "./ModalForm";

const Model = ({ show, handleClose, notes, addNote }) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (date === "" || category === "" || description === "") {
      alert("Fields cannot be empty!");
      return;
    }

    const note = {
      id: Math.max(notes.map((n) => n.id)) + 1,
      date: date,
      category: category,
      description: description,
    };
    addNote(note);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm
            setDate={setDate}
            setCategory={setCategory}
            setDescription={setDescription}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="primary-bg" onClick={handleAdd}>
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

export default Model;
