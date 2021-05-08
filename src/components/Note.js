import React, {useState} from 'react';
import { RiQuillPenFill } from "react-icons/ri";
import { MdDelete, MdZoomOutMap } from "react-icons/md";
import ZoomModal from "./ZoomModal";
import "./styles/Note.css";
function Note(props) {
  const [zoom, setZoom] = useState(false);
  const [edit, setEdit] = useState(false);
    return (
      <div className="note-container">
        <h3 className="note-title">{props.title}</h3>
        <p className="note-description">{props.description}</p>
        <MdZoomOutMap
          className="zoom-btn"
          onClick={()=>{
            setZoom(prev => !prev);
          }}
        
        />
        <RiQuillPenFill
          className="edit-btn"
          onClick={() => {
            setEdit((prev) => !prev);
          }}
        />
        <MdDelete
          className="delete-btn"
          onClick={() => {
            console.log("delete");
          }}
        />
        <ZoomModal
          noteId={props.noteId}
          title={props.title}
          description={props.description}
          zoom={zoom}
          setZoom={setZoom}
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
