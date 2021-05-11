import React from "react";
import ReactDOM from "react-dom";
import { MdWarning } from "react-icons/md";
import "./styles/Modal.css";

function RemoveModal(props) {
  
  // close modal ----------------------------
  const close = () => {
    props.setRemove(prev => !prev);
  };

  //delete the note from database----------------
  const deleteThisNote = () => {
    props.delteNoteFromDB(props.noteId);
    close();
  }
  if (!props.remove) return null;

  return ReactDOM.createPortal(
    <div className="container">
      <div className="dropback"></div>
      <div className="remove-content">
        <h3 className="title">
          <MdWarning className="warning-icon" />
          This note will be permanently removed.
        </h3>
        <button className="proceed-btn" onClick={deleteThisNote}>
          Yes Remove
        </button>
        <button className="cancel-btn" onClick={close}>
          Cancel
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default RemoveModal;
