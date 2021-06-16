import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AddTask from './AddTask';
import ShowTasks from './ShowTasks';

const Main = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      date: '2021-06-20',
      category: 'General',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque laboriosam recusandae quo nihil incidunt assumenda maxime vero qui enim numquam, possimus nobis totam maiores quas eum omnis suscipit tempora.',
    },
    {
      id: 2,
      date: '2021-06-20',
      category: 'DSA',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque laboriosam recusandae quo nihil incidunt assumenda maxime vero qui enim numquam, possimus nobis totam maiores quas eum omnis suscipit tempora.',
    },
    {
      id: 3,
      date: '2021-06-20',
      category: 'Development',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque laboriosam recusandae quo nihil incidunt assumenda maxime vero qui enim numquam, possimus nobis totam maiores quas eum omnis suscipit tempora.',
    },
    {
      id: 4,
      date: '2021-06-20',
      category: 'Learning',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque laboriosam recusandae quo nihil incidunt assumenda maxime vero qui enim numquam, possimus nobis totam maiores quas eum omnis suscipit tempora.',
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
