import React from 'react';
import { RiQuillPenFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import "./styles/Note.css";
function Note(props) {
    return (
      <div className="note-container">
        <h3 className="note-title">{props.title}</h3>
        <p className="note-description">{props.description}</p>
        <RiQuillPenFill
          className="edit-btn"
          onClick={() => {
            console.log("edit");
          }}
        />
        <MdDelete
          className="delete-btn"
          onClick={() => {
            console.log("delete");
          }}
        />

        {/* <button
          
          onClick={() => {
            console.log("edit");
          }}
        >
          <RiQuillPenFill />
        </button>
            <button
                type="submit"
          className="delete-btn"
          onClick={() => {
            console.log("delete");
          }}
        >
          <RiDeleteBin6Fill />
        </button> */}
      </div>
    );
}

export default Note
