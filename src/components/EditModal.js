import React from "react";
import ReactDOM from "react-dom";
import { ImCross } from "react-icons/im";
import { MdLibraryAdd } from "react-icons/md";
import "./styles/Modal.css";
import "./styles/NewNote.css";

function EditModal(props) {
  if (!props.edit) return null;

  return ReactDOM.createPortal(
    <div className="container">
      <div className="dropback" onClick={props.editNote}></div>
      <div className="content">
        <input
          className="new-note__title note-title"
          type="text"
          value={props.title}
          onChange={(e) => {
            props.setTitle(e.target.value);
          }}
          placeholder="Title"
        />
        <textarea
          className="note-description new-note__description"
          name="Description"
          value={props.description}
          onChange={(e) => {
            props.setDescription(e.target.value);
          }}
          placeholder="Description"
          style={{ resize: "none" }}
        ></textarea>
        <ImCross className="remove" onClick={props.editNote} />
        <MdLibraryAdd className="save" onClick={props.editNote} />
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default EditModal;
