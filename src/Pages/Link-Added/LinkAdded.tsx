import React, { useState } from "react";
import "./linkAdded.css";

interface ILInkAddedProps {
  onLinkAdded: Function;
}

const LinkAdded: React.FC<ILInkAddedProps> = ({ onLinkAdded }) => {
  const handleSubmit = () => {
    onLinkAdded();
  };

  return (
    <div className="chrome-ext-window">
      <div className="login-container">
        <div className="logo-container"></div>
        <div className="form">
          <p className="star-emoji">✨</p>
          <p className="loginlabel">Blip saved to List</p>
          {/* <button className = "loginbutton" type="submit" onClick={handleSubmit}>Add new Link</button> */}
        </div>
      </div>
      <div className="tinysubtitle">BLOOP Beta Release 2023</div>
    </div>
  );
};

export default LinkAdded;
