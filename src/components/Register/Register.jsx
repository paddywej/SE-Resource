import React, { useState } from "react";
import "./Register.css";
import close_symbol from "../../assets/close_symbol.png";

const Register = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordChange = (e) => {
    if (e.target.value.length > 0) {
      setShowConfirmPassword(true);
    } else {
      setShowConfirmPassword(false);
    }
  };

  return (
    <> 
    <div className="login show-login" id="login">
    <form className="login__form">
      <i className="login__close">
        <a href="/">
            <img className="close_button" src={close_symbol} alt="Close" />
        </a>
      </i>
      <h2 className="login__title">Sign Up</h2>
      <div className="login__group">
        <div>
          <label htmlFor="email" className="login__label">Email</label>
          <input
            type="email"
            placeholder="Write your email"
            id="email"
            className="login__input"
          />
        </div>
        <div>
          <label htmlFor="password" className="login__label">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            className="login__input"
            onChange={handlePasswordChange}
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
    </form>
  </div>
    </>
  );
};

export default Register;
