import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const ShowTasks = ({ notes, setNotes }) => {
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <Container className='show-tasks'>
      <h2 className='m-4 bot-border text-center'>ALL NOTES </h2>
      <ListGroup className='show'>
        {notes.map((note) => (
          <ListGroup.Item
            className='mb-3 rounded-1 d-flex justify-content-between'
            key={note.id}
          >
            <div>{note.description.substr(0, 30) + '...'}</div>
            <div>
              <span
                className='fas fa-pen-square fa-2x delete-btn'
                onClick={() => handleDelete(note.id)}
              ></span>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ShowTasks;
