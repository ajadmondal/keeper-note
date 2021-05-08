import React from "react";
import ReactDOM from "react-dom";
import { ImCross } from "react-icons/im";
import './styles/ZoomModal.css';

function ZoomModal(props) {
    if (!props.zoom) return null;

    return ReactDOM.createPortal(
      <div className="container">
        <div
          className="dropback"
          onClick={() => {
            props.setZoom(!props.zoom);
          }}
        ></div>
        <div className="content">
          <h3 className="note-title">{props.title}</h3>
          <p className="note-description">{props.description}</p>
          <ImCross
            className="remove"
            onClick={() => {
              props.setZoom(!props.zoom);
            }}
          />
        </div>
      </div>,
      document.getElementById("portal")
    );
}

        export default ZoomModal
