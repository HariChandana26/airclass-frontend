import './index.css';
import React, { useState } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import loginImage from '../../images/login-register.png';
import logo from '../../images/logo2.png';

import { URL } from '../App/constants';

function SignupPage() {
  const [errorMsg, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const updateName = event => {
    setNameValue(event.target.value);
  };
  const updateEmail = event => {
    setEmailValue(event.target.value);
  };
  const updatePassword = event => {
    setPasswordValue(event.target.value);
  };
  const RegisterUser = () => {
    axios({
      method: 'POST',
      url: `${URL}/v1/auth/register`,
      data: {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      },
    })
      .then(function(response) {
        if (response.statusText === 'Created' && response.status === 201) {
          // setUserSession(response.data.token, response.data.user);
          // history.push('/homepage');
          setSuccess('Registered successfully. Please login');
          setError('');
        }
      })
      .catch(error => {
        if (error.response.status === 401)
          setError(error.response.data.message);
        else if (error.response.status === 400)
          setError(error.response.data.message);
        else setError('Something went wrong. Please try again later.');
        setSuccess('');
      });
  };
  return (
    <>
      <div className="signup-container">
        <div className="login">
          <div className="login-part1">
            <div className="login-part1-text">
              <img className="logo" src={logo} alt="website-logo" />
              <h1 className="sign-in-to">Sign up to</h1>
              <h1 className="website-name">AIR CLASS</h1>
              <p className="register-msg">
                If you already have an account login
              </p>
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
            <input
              type="text"
              className="username"
              placeholder="Enter name"
              value={nameValue}
              onChange={updateName}
            />
            <input
              type="text"
              className="username"
              placeholder="Enter email"
              value={emailValue}
              onChange={updateEmail}
            />

            <input
              type="password"
              className="username"
              placeholder="Password"
              value={passwordValue}
              onChange={updatePassword}
            />
            {success && (
              <>
                <small style={{ color: 'green' }}>{success}</small>
                <br />
              </>
            )}
            {errorMsg && (
              <>
                <small style={{ color: 'red' }}>{errorMsg}</small>
                <br /> <br />
              </>
            )}
            <button
              type="button"
              className="username login-btn"
              onClick={RegisterUser}
            >
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

export default SignupPage;
