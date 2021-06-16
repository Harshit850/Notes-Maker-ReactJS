import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AddTask from './AddTask';
import ShowTasks from './ShowTasks';

const Main = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      date: '20/06/2021',
      category: 'general',
      description: 'Fix the dog house',
    },
    {
      id: 2,
      date: '22/06/2021',
      category: 'DSA',
      description: 'Learn five algorithms',
    },
    {
      id: 3,
      date: '20/06/2021',
      category: 'development',
      description: 'Make React App and learn state management',
    },
  ]);

  return (
    <div className='main'>
      <Container>
        <Row className='justify-content-md-center'>
          <Col lg='6'>
            <AddTask notes={notes} setNotes={setNotes} />
          </Col>
          <Col lg='6'>
            <ShowTasks notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
