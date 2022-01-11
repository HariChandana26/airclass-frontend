import './index.css';
import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import loginImage from '../../images/login-register.png';
import logo from '../../images/logo2.png';

function LoginPage() {
  return (
    <>
      <div className="signup-container">
        <div className="login">
          <div className="login-part1">
            <div className="login-part1-text">
              <img className="logo" src={logo} alt="website-logo" />
              <h1 className="sign-in-to">Sign up to</h1>
              <h1 className="website-name">AIR CLASS</h1>
              <p className="register-msg">If you already have an account</p>
              <p className="register-msg">
                You can{' '}
                <NavLink className="nav-link" to="/login">
                  <span className="register-here">Login here!</span>
                </NavLink>
              </p>
            </div>
            <img src={loginImage} className="login-image" alt="login" />
          </div>

          <div className="login-part2">
            <h1 className="sign-in">Sign Up</h1>
            <input type="text" className="username" placeholder="Enter email" />
            <input
              type="text"
              className="username"
              placeholder="Create Username"
            />
            <input
              type="text"
              className="username"
              placeholder="Contact number"
            />
            <input
              type="password"
              className="username"
              placeholder="Password"
            />
            <input
              type="password"
              className="username"
              placeholder="Confirm Password"
            />
            <button type="button" className="username login-btn">
              Register
            </button>
            <p className="continue-with">or continue with</p>
            <div className="login-icons">
              <BsFacebook className="facebook-icon" />
              <FcGoogle className="google-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
