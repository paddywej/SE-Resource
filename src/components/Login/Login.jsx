import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import close_symbol from "../../assets/close_symbol.png"; // Assuming this is your close icon path

const Login = ({ showLogin, handleLoginClose, setLoggedIn, setUsername }) => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous errors
  
    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: studentId,
          password: password,
        }),
      });
  
      const data = await response.json();
      console.log("Response data:", data); // Log the JSON data
  
      if (response.status === 200) {
        console.log("Login successful");
        setLoggedIn(true); // Set logged-in status in parent component
        setUsername(data.username); // Set username from the response
        localStorage.setItem("username", data.username); // Store username for persistence
        handleLoginClose(); // Close the login modal
        navigate("/"); // Redirect to homepage
      } else {
        setErrorMessage(data.detail || "An error occurred.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Error during login. Please try again later.");
    }
  };

  return (
    showLogin && (
      <div className="login show-login" id="login">
        <form className="login__form" onSubmit={handleSubmit}>
          <i className="login__close" onClick={handleLoginClose}>
            <img className="close_button" src={close_symbol} alt="Close" />
          </i>
          <h2 className="login__title">Log In</h2>
          <div className="login__group">
            <div>
              <label htmlFor="studentId" className="login__label">Student ID</label>
              <input
                type="text"
                placeholder="Enter your student ID"
                id="studentId"
                className="login__input"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <p>Don't have an account yet?</p>
            <p className="login__signup">
              <a href="/register">Register Now</a>
            </p>
            <button type="submit" className="login__button">Log In</button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    )
  );
};

export default Login;
