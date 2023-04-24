import React, { useState } from "react";
import "./LinkAdded.css";
import logo from "./logo.svg";

interface ILInkAddedProps {
  onLinkAdded: Function
}

const LinkAdded: React.FC<ILInkAddedProps> = ({ onLinkAdded }) => {
  const handleSubmit = () => {
    onLinkAdded();
  };

  return (
    
    <div className="chrome-ext-window">
    <div className="login-container">
    <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="form">
      <p className="loginlabel">Link Added successfully</p>
        <button className = "loginbutton" type="submit" onClick={handleSubmit}>Add new Link</button>
      </div>
      
    </div>
    <div className = "tinysubtitle">BLOOP Private Beta 2023</div>
    </div>
  );
};

export default LinkAdded;
