import React from "react";
import "./Login.css";
import close_symbol from "../../assets/close_symbol.png";

const Login = ({ showLogin, handleLoginClose }) => {
  return (
    showLogin && (
      <div className="login show-login" id="login">
          <form action="" className="login__form">
            <h2 className="login__title">Log In</h2>
            <div className="login__group">
              <div>
                <label htmlFor="email" className="login__label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Write your email"
                  id="email"
                  className="login__input"
                />
              </div>
              <div>
                <label htmlFor="password" className="login__label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  id="password"
                  className="login__input"
                />
              </div>
            </div>
            <div>
              <p className="login__signup">
                <a href="#">Sign up</a>
              </p>
              <a href="#" className="login__forgot">
                Forgot password?
              </a>
              <button type="submit" className="login__button">
                Log In
              </button>
            </div>
          </form>
          <i
            className="login__close"
            id="login-close"
            onClick={handleLoginClose}>
            <img className="close_button" src={close_symbol} />
          </i>
        </div>
      )
  )
}

export default Login;
