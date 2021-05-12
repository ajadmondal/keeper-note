import React, {useEffect} from 'react'
import ReactDOM from 'react-dom';
import './styles/Notifier.css';

function Notifier(props) {
    useEffect(() => {
        const id = setTimeout(() => props.setShowNotifier(0), 3000);
        return (() => clearTimeout(id));
    }, [])
    // if (props.showNotifier % 2 !== 0) return null;
    // else
      return (
        <div className="notifier">
          <p>Document successfully Updated</p>
        </div>
      );
}

export default Notifier;
