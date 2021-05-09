import React from 'react';
import './styles/NewNote.css';
import { v4 as uuid } from "uuid";
import { RiAddCircleFill } from "react-icons/ri";

function NewNote({title, description, notes, setTitle, setDescription, setNotes, updateNoteToDB }) {
  
  
  const addNewPost = (e) => {
    e.preventDefault();
    const noteId = uuid();
    updateNoteToDB(noteId, title, description);
    const Note = {
      noteId: noteId,
      title: title,
      description: description,
    };
    setNotes([Note, ...notes]);
    setTitle("");
    setDescription("");
    // console.log(noteId, title, description);
    // setTitle("");
    // setDescription("");
  };
  return (
    <form className="new-note" onSubmit={addNewPost}>
      <input
        className="new-note__title"
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Title"
      />
      <textarea
        className="new-note__description"
        name="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Description"
        style={{ resize: "none" }}
      ></textarea>
      <button type="submit" className="add-btn">
        <RiAddCircleFill />
      </button>
    </form>
  );
}

export default NewNote
