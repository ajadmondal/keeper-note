import React, {useEffect} from 'react';
import './styles/Header.css';
import { GrLogin } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import firebase from 'firebase/app';
import { auth } from '../firebase';



function Header(props) {
  const user = props.user;
  const setUser = props.setUser;

  // LogIn component ------------------------------------------------
  const LogIn = () => {
    return (
      <h3 onClick={signInOut} className="log__info">
        Log In <GrLogin className="log__icon" />
      </h3>
    );
  };
  // LogOut component ------------------------------------------------
  const LogOut = () => {
    return (
      <h3 onClick={signInOut} className="log__info">
        Log Out <FiLogOut className="log__icon" />
      </h3>
    );
  };

  // LogIn and LogOut functionality ------------------------------------
  const provider = new firebase.auth.GoogleAuthProvider();
  const signInOut = () => {
    !user
      ? auth
          .signInWithPopup(provider)
          .then(() => {
            // console.log("Loged In");
          })
          .catch((error) => alert(error.message))
      : auth
          .signOut()
          .then(() => {
            setUser(null);
            // console.log("Loged Out");
          })
          .catch((error) => alert(error.message));
  };

  
  return (
    <div className="header">
      <div className="header__content">
        <h2 className="brand">
          <img className="brand__icon" src="keeperIcon.png" alt="" />
          {/* <SiGreenkeeper className="brand__icon"/> */}
          Keeper
        </h2>
        <div className="user">
          <h4 className="user__name">
            {user ? user.displayName : "Hello Guest"}
          </h4>
          {!user ? <LogIn /> : <LogOut />}
          {/* <h3 className="log__info">Log In</h3> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
