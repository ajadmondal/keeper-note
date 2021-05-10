import React, {useState} from 'react';
import './styles/NewNote.css';
import { v4 as uuid } from "uuid";
import { RiAddCircleFill } from "react-icons/ri";


function NewNote({setNotes, updateNoteToDB }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // updating notes -------------------------
  const updateNotes = (noteId, title, description) => {
    if (title === "") {
      alert("Note title cannot be empty.");
    } else if (description === "") {
      alert("Note description cannot be empty.");
    } else {
      const newPost = {
        noteId: noteId,
        title: title,
        description: description,
      };
      setNotes((prev) => {
        const prevNotes = [...prev];
        prevNotes.push(newPost);
        return prevNotes;
      });
      updateNoteToDB(noteId, title, description);
      
      setTitle("");
      setDescription("");
      
      
    }
  };
  const addNewPost = (e) => {
    e.preventDefault();
    const noteId = uuid();
    updateNotes(noteId, title, description);
    // console.log(noteId, title, description);
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

export default NewNote;
