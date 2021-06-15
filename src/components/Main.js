import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AddTask from './AddTask';
import ShowTasks from './ShowTasks';

const Main = () => {
  return (
    <div className='main'>
      <Container>
        <Row className='justify-content-md-center'>
          <Col lg='5'>
            <AddTask />
          </Col>
          <Col lg='7'>
            <ShowTasks />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
