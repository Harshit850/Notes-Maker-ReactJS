import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const ShowTasks = ({ notes }) => {
  return (
    <Container className='show-tasks'>
      <h2 className='m-4 bot-border text-center'>ALL NOTES </h2>
      <ListGroup className='show'>
        {notes.map((note) => (
          <ListGroup.Item className='mb-3 rounded-1' key={note.id}>
            {note.description}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ShowTasks;
