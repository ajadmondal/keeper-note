import React from 'react';
import './styles/Header.css';
import "../keeperIcon.png";
// import { SiGreenkeeper } from "react-icons/si";

function Header() {
    return (
      <div className="header">
        <div className="header__content">
          <h2 className="brand">
            <img className="brand__icon" src="keeperIcon.png" alt=""/>
            {/* <SiGreenkeeper className="brand__icon"/> */}
            Keeper
          </h2>
          <div className="user">
            <h4 className="user__name">Hello Guest</h4>
            <h3 className="log__info">Log In</h3>
          </div>
        </div>
      </div>
    );
}

export default Header;
