import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Buttons from '../UIElements/Buttons';

const AddTask = () => {
  return (
    <>
      <Container className='add-container d-flex justify-content-start mb-5'>
        <h1 className='m-4 bot-border'>Add Notes </h1>
        <i class='fas fa-plus-circle fa-3x mt-4 add-btn'></i>
      </Container>

      <Container className='categories'>
        <h4> Categories </h4>
        <Row>
          <Col>
            <Buttons text='All' />
          </Col>
          <Col>
            <Buttons text='Random' />
          </Col>
        </Row>
        <Row>
          <Col>
            <Buttons text='Specific' />
          </Col>
          <Col>
            <Buttons text='Other' />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddTask;
