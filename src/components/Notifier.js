import React, { useEffect } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

import './styles/Notifier.css';

function Notifier(props) {
    useEffect(() => {
      const id = setTimeout(() => {
        props.setNotifierComment("");
        props.setShowNotifier(0);
      }, 2500);
        return (() => clearTimeout(id));
    }, [])
    // if (props.showNotifier % 2 !== 0) return null;
    // else
      return (
        <div
          className={`notifier ${
            props.showNotifier === 1 ? "success" : "error"
          }`}
        >
          <div className="notifier__icon">
            {props.showNotifier === 1 ? (
              <FaRegCheckCircle />
            ) : (
              <MdErrorOutline />
            )}
          </div>
          <p>{props.notifierComment}</p>
        </div>
      );
}

export default Notifier;
