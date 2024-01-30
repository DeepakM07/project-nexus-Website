import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handlesubmit =(e) => {
      e.preventdefault()
      axios.post('http://localhost:3000/signup',{username, email, password, phoneNumber})
      .then(result => console.log(result))
      .catch(err => console.log(err))
        
    }
  return (
    <div className="body-wrapper">
    <div className="container23">
      <div className="signup">
        <form className="signupForm" onSubmit={handlesubmit}>
          <h2>Join as our Techy</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" required id="username" placeholder="Username"
            value={username} autoComplete="yes"
            onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" id="email"
            value={email} autoComplete="yes"
            onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Password"
            value={password} autoComplete="yes"
            onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-field">
            <i className="fas fa-phone"></i>
            <input type="tel" id="phonenumber"placeholder="Phone Number" required
            value={phoneNumber}  autoComplete="yes"
            onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>

          <button type="button"className="button">Sign Up</button>
          <p>Already have an account?</p>
            <Link to='/login' className="A">Login</Link>
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
export default Signup;
