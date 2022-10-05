import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import AddTask from "./AddTask";
import ShowTasks from "./ShowTasks";

const Main = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) {
      setNotes(notesData);
    }
  }, []);

  const addNote = (note) => {
    setNotes([...notes, note]);
    localStorage.setItem("notes", JSON.stringify([...notes, note]));
  };

  const editNote = (note) => {
    const newNotes = notes.map((item) => {
      if (item.id === note.id) {
        return note;
      }
      return item;
    });
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
    localStorage.setItem(
      "notes",
      JSON.stringify(notes.filter((n) => n.id !== id))
    );
  };

  return (
    <div className="main">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="6">
            <AddTask notes={notes} addNote={addNote} />
          </Col>
          <Col lg="6">
            <ShowTasks
              notes={notes}
              deleteNote={deleteNote}
              editNote={editNote}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
