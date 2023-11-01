import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "Testuser" && password === "Testpass") {
      navigate("/chatbot");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };
  return (
    <div className="page">
      <div className="image">
        <img src="/img/logo.png" alt="" />
      </div>
      <div className="container">
        <h1 className="heading">Welcome Back</h1>
        <p className="text">Sign in to continue to Aiworksquad</p>

        <form action="" className="form">
          <div className="inputs">
            <div className="textbox">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <img src="/img/lock.svg" className="svg" alt="" />
            </div>
            <div className="textbox">
              <input
                type="text"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <img src="/img/lock.svg" className="svg" alt="" />
            </div>
          </div>
          <div className="column">
            <label htmlFor="remember" className="checkbox">
              <input type="checkbox" id="remember" />
              Remember me
            </label>
            <a href="/">Forgot Password?</a>
          </div>
          <div className="btn">
            <button onClick={handleLogin}>Login</button>
          </div>
          {error && <div className="error"> {error}</div>}
        </form>
      </div>

      <h1 className="bottomText">2023 AiworkSquad</h1>
    </div>
  );
};

export default Login;
