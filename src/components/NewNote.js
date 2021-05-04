import React, {useState} from 'react';
import './styles/NewNote.css';
import { RiAddCircleFill } from "react-icons/ri";

function NewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title, description);
    setTitle("");
    setDescription("");
  }
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
        <button type="submit" className="add-btn"><RiAddCircleFill/></button>
      </form>
    );
}

export default NewNote
