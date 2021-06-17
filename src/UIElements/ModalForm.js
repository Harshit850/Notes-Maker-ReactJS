import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const ModalForm = ({ setDate, setCategory, setDescription }) => {
  return (
    <>
      <Form>
        <Form.Group as={Row} className='mb-4' controlId='formPlaintext'>
          <Form.Label column sm='2'>
            Category
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              type='text'
              onChange={(e) => setCategory(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-4' controlId='formPlaintext'>
          <Form.Label column sm='2'>
            Date
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              type='date'
              onChange={(e) => setDate(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            rows={6}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default ModalForm;
