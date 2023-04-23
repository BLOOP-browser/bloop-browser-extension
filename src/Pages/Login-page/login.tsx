import React, { useState } from "react";
import "./login.css";
import logo from "./logo.svg";

interface ILoginProps {
  onLogin: (email: string) => void;
}

const Login: React.FC<ILoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(email);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    
    <div className="chrome-ext-window">
    <div className="login-container">
    <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email" className="loginlabel">Login to start! </label>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="my@email.com"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="email"
            id="email"
            name="password"
            placeholder="Password"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button className = "loginbutton" type="submit">Login</button>
      </form>
      
    </div>
    <div className = "tinysubtitle">BLOOP Private Beta 2023</div>
    </div>
  );
};

export default Login;
