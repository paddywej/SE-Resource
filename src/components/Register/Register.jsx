import React, { useState } from "react";
import "./Register.css";
import close_symbol from "../../assets/close_symbol.png";

const Register = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (e) => {
    if (e.target.value.length > 0) {
      setShowConfirmPassword(true);
    } else {
      setShowConfirmPassword(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: username, 
          password,
        }),
      });

      if (response.ok) {
        alert("Registration successful!");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setErrorMessage("");
      } else {
        const data = await response.json();
        setErrorMessage(data.detail || "An error occurred.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("Error during registration. Please try again later.");
    }
  };

  return (
    <div className="login show-login" id="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <i className="login__close">
          <a href="/">
            <img className="close_button" src={close_symbol} alt="Close" />
          </a>
        </i>
        <h2 className="login__title">Sign Up</h2>
        <div className="login__group">
          <div>
            <label htmlFor="username" className="login__label">Student ID</label>
            <input
              type="text"
              placeholder="Enter your student ID"
              id="username"
              className="login__input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="login__label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              className="login__input"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                handlePasswordChange(e);
              }}
            />
          </div>

          {showConfirmPassword && (
            <div className="confirm-password">
              <label htmlFor="confirm-password" className="login__label">Confirm Your Password</label>
              <input
                type="password"
                placeholder="Enter your password again"
                id="confirm-password"
                className="login__input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}
        </div>
        <div>
          <p>Already have an account?</p>
          <p className="login__signup">
            <a href="/">Log In</a>
          </p>
          <button type="submit" className="login__button">Sign Up</button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Register;
