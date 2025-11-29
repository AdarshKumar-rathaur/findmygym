import React from "react";
import Background from "../images/background.webp";
import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="sign-in">
      <img src={Background} alt="" className="background" />
        <div className="card">
          <form className="form">
            <h1>Login</h1>
            <div className="input">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              />
              <i className="fa-utility-fill fa-semibold fa-user"></i>
            </div>
            <div className="input">
              <input type="email" name="email" placeholder="Email" />
              <i className="fa-utility-fill fa-semibold fa-at"></i>
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <i className="fa-utility-fill fa-semibold fa-lock"></i>
            </div>
            <div className="forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="/">Forgot password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="register">
              <div className="text">
                <p>
                  Don't have an account? <a href="/">Register</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
