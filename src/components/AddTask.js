import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import Modal from "../UIElements/Modal";
import Buttons from "../UIElements/Buttons";

const AddTask = ({ notes, addNote }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container className="add-container d-flex justify-content-start mb-5">
        <h3 className="m-4 bot-border">NOTE MAKER </h3>
        <span
          className="fas fa-plus-circle fa-3x mt-4 add-btn"
          onClick={handleShowModal}
        ></span>
        {showModal && (
          <Modal
            show={showModal}
            handleClose={handleHideModal}
            notes={notes}
            addNote={addNote}
          />
        )}
      </Container>

      <Container className="categories">
        <h6 className="mb-3"> FEATURES </h6>
        <Row>
          <Col>
            <Buttons text="create notes" />
          </Col>
          <Col>
            <Buttons text="read notes" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Buttons text="update notes" />
          </Col>
          <Col>
            <Buttons text="delete notes" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddTask;
