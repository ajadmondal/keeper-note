import React, {useState} from 'react';
import './styles/NewNote.css';
import { v4 as uuid } from "uuid";
import { RiAddCircleFill } from "react-icons/ri";


function NewNote({ setNotes, updateNoteToDB, setShowNotifier, setNotifierComment }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // adding new note -------------------------
  const addNewPost = (e) => {
    e.preventDefault();
    const noteId = uuid();
    if (title === "") {
      setNotifierComment("Note title cannot be empty.");
      setShowNotifier((prev) => 0 - 1);
    } else if (description === "") {
      setNotifierComment("Note description cannot be empty.");
      setShowNotifier((prev) => 0 - 1);
    } else {
      const newPost = {
        noteId: noteId,
        title: title,
        description: description,
      };
      setNotes((prev) => {
        const prevNotes = [newPost, ...prev];
        // prevNotes.push(newPost);
        return prevNotes;
      });
      updateNoteToDB(noteId, title, description);

      setTitle("");
      setDescription("");
    }
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
