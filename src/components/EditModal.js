import React,{useState} from "react";
import ReactDOM from "react-dom";
import { ImCross } from "react-icons/im";
import "./styles/ZoomModal.css";
import "./styles/NewNote.css";

function EditModal(props) {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
  const close = () => {
    props.setEdit(!props.edit);
  };
  if (!props.edit) return null;

  return ReactDOM.createPortal(
    <div className="container">
      <div className="dropback" onClick={close}></div>
      <div className="content">
        <input
          className="new-note__title note-title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title"
        />
        <textarea
          className="note-description new-note__description"
          name="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Description"
          style={{ resize: "none" }}
        ></textarea>
        <ImCross className="remove" onClick={close} />
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default EditModal;
