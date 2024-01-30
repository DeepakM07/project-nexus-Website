import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="body-wrapper">
    <div className="container12">
      <div className="login">
        <form className="loginForm">
          <h2>Welcome Back Buddy</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" required id="username" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <a href="#" className="A1">Forgot Password?</a>
          <button type="button" className="button">Login</button>
          <p>Don't have an account?</p><Link to='/signup'className="A">Sign up</Link>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p>&copy; 2024 Techies Website</p>
        </form>
      </div>
    </div>
  </div>
  );
}
export default Login;
