import React, { useState } from "react";
import "./login.css";
import logo from "./logo.svg";
import AuthService from "../../services/auth-services";

interface ILoginProps {
  onLogin: Function;
}

const Login: React.FC<ILoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleSubmit() {
    setErrorMessage("");
    if(!email || !password){
      setErrorMessage("Invalid email or password");
      return;
    }
    AuthService.signIn(email, password).then((res) => {
      if(res.data.accessToken){
        localStorage.setItem("auth", res.data.accessToken);
        onLogin(res.data.accessToken);
      }else{
        setErrorMessage("Internal error, please try to login later")
      }
    }).catch((error) => {
      setErrorMessage("Invalid credentials")
    })
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    
    <div className="chrome-ext-window">
    <div className="login-container">
    <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="form">
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
            type="password"
            id="email"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errorMessage && (
              <span style={{ color: "red" }} className="email-error">
                {errorMessage}.
              </span>
            )}
        </div>
        <button className = "loginbutton" type="submit" onClick={handleSubmit}>Login</button>
        </div>
      
    </div>
    <div className = "tinysubtitle">BLOOP Private Beta 2023</div>
    </div>
  );
};

export default Login;
