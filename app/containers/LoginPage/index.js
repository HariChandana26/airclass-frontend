import './index.css';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import LoadingSpinnerComponent from 'components/LoadingIndicator';
import loginImage from '../../images/login-register.png';
import logo from '../../images/logo2.png';
import { URL } from '../App/constants';

function LoginPage() {
  const [errorMsg, setError] = useState(null);
  const history = useHistory();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const updateEmail = event => {
    setEmailValue(event.target.value);
  };
  const updatePassword = event => {
    setPasswordValue(event.target.value);
  };
  const dispatch = useDispatch();

  const loginUser = () => {
    trackPromise(
      axios
        .post(`${URL}/v1/auth/login`, {
          email: emailValue,
          password: passwordValue,
        })
        .then(function(response) {
          if (response.statusText === 'OK' && response.status === 200) {
            history.push('/homepage');
            dispatch({
              type: 'USER_LOGGEDIN',
              userinfo: [response.data.user, passwordValue],
            });
          }
        })
        .catch(function(error) {
          console.log(error);
          if (error.response.status === 401)
            setError(error.response.data.message);
          else if (error.response.status === 400)
            setError(error.response.data.message);
          else setError('Something went wrong. Please try again later.');
        }),
    );
  };
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress ? (
    <LoadingSpinnerComponent />
  ) : (
    <>
      <div className="login-container">
        <div className="login">
          <div className="login-part1">
            <div className="login-part1-text">
              <img className="login-logo" src={logo} alt="website-logo" />
              <h1 className="sign-in-to">Sign in to</h1>
              <h1 className="website-name">AIR CLASS</h1>
              <p className="register-msg">
                If you don’t have an account register
              </p>
              <p className="register-msg">
                You can{' '}
                <NavLink className="nav-link" to="/signup">
                  <span className="register-here">Register here!</span>
                </NavLink>
              </p>
            </div>
            <img src={loginImage} className="login-image" alt="login" />
          </div>

          <div className="login-part2">
            <h1 className="sign-in">Sign in</h1>
            <input
              type="text"
              className="username"
              placeholder="enter email or username"
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
            {errorMsg && (
              <>
                <small style={{ color: 'red' }}>{errorMsg}</small>
                <br />
              </>
            )}
            <button
              type="button"
              className="username login-btn"
              onClick={() => loginUser()}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
