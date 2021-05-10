import React, {useState} from 'react';
import { RiQuillPenFill } from "react-icons/ri";
import { MdDelete, MdZoomOutMap } from "react-icons/md";
import ZoomModal from "./ZoomModal";
import EditModal from "./EditModal";
import RemoveModal from "./RemoveModal";
import "./styles/Note.css";
function Note(props) {
  const [zoom, setZoom] = useState(false);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);

  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  // updating the edited note----------------------------------------
  const editNote = () => {
    if (title === "") {
      alert("Note title cannot be empty.");
    } else if (description === "") {
      alert("Note description cannot be empty.");
    } else {

      props.setNotes((prev) => {
        const prevNotes = [...prev];
        for (let i = 0; i < prevNotes.length; i++){
          if (prevNotes[i].noteId === props.noteId) {
            prevNotes[i].title = title;
            prevNotes[i].description = description;
            break;
          }
        }
        // prevNotes.push(newPost);
        return prevNotes;
      });
      props.updateNoteToDB(props.noteId, title, description);
      setEdit(!edit);
    }
  }

    return (
      <div className="note-container">
        <h3 className="note-title">{title}</h3>
        <p className="note-description">{description}</p>
        <MdZoomOutMap
          className="zoom-btn"
          onClick={() => {
            setZoom((prev) => !prev);
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
            setRemove(!remove);
          }}
        />
        <ZoomModal
          noteId={props.noteId}
          title={title}
          description={description}
          zoom={zoom}
          setZoom={setZoom}
        />
        <EditModal
          title={title}
          description={description}
          edit={edit}
          setTitle={setTitle}
          setDescription={setDescription}
          editNote={editNote}
        />
        <RemoveModal
          noteId={props.noteId}
          remove={remove}
          setRemove={setRemove}
          delteNoteFromDB={props.delteNoteFromDB}
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
