import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AddTask from './AddTask';
import ShowTasks from './ShowTasks';

const Main = () => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col lg='4' sm='6'>
          <AddTask />
        </Col>
        <Col lg='4' sm='6'>
          <ShowTasks />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
