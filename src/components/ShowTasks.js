import React, { useState } from 'react';
import { Container, ListGroup, Dropdown } from 'react-bootstrap';

import EditModal from '../UIElements/EditModal';
import ViewModal from '../UIElements/ViewModal';

const ShowTasks = ({ notes, setNotes }) => {
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [singleNote, setSingleNote] = useState('');

  const showViewModal = (id) => {
    const foundNote = notes.find((note) => note.id === id);
    setSingleNote(foundNote);
    setViewModal(true);
  };

  const hideViewModal = () => {
    setViewModal(false);
    setEditModal(false);
  };

  const handleUpdate = (id) => {
    const foundNote = notes.find((note) => note.id === id);
    setSingleNote(foundNote);
    setEditModal(true);
  };

  const handleDelete = (id) => {
    alert('Note will be deleted permanantly!!!');
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <Container className='show-tasks'>
      <h2 className='m-3 text-center'>ALL NOTES </h2>

      <div className='d-flex justify-content-end mb-3  '>
        <Dropdown>
          <Dropdown.Toggle variant='warning' id='dropdown-basic'>
            Sort By
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item value='date'>Date</Dropdown.Item>
            <Dropdown.Item value='month'>Month</Dropdown.Item>
            <Dropdown.Item value='year'>Year</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {editModal && (
        <EditModal
          show={editModal}
          note={singleNote}
          handleClose={hideViewModal}
          setNotes={setNotes}
          notes={notes}
        />
      )}

      {viewModal && (
        <ViewModal
          show={viewModal}
          note={singleNote}
          handleClose={hideViewModal}
        />
      )}

      <ListGroup className='show'>
        {notes.map((note) => (
          <ListGroup.Item
            className='mb-3 rounded-1 d-flex justify-content-between'
            key={note.id}
          >
            <div className='m-1'>{note.category}</div>
            <div className='icons'>
              <span
                className='far fa-eye view-btn m-1'
                onClick={() => showViewModal(note.id)}
              ></span>
              <span
                className='fas fa-pen-square edit-btn m-1'
                onClick={() => handleUpdate(note.id)}
              ></span>
              <span
                className='fas fa-trash-alt delete-btn m-1'
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
