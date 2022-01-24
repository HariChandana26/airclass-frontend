import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';

function ProfileDetails() {
  const initialState = useSelector(state => state);
  const dispatch = useDispatch();
  const { global } = initialState;
  const [email, setEmail] = useState(global.loggedinUserEmail);
  const [mobilenumber, setMobileNumber] = useState(
    global.loggedinUserMobileNumber,
  );
  const [dateofbirth, setDateofBirth] = useState(
    global.loggedinUserDateofBirth,
  );
  const [occupation, setOccupation] = useState(global.loggedinUserOccupation);
  const updateProfileDetails = (
    task = [email, mobilenumber, dateofbirth, occupation],
  ) => {
    dispatch({
      type: 'UPDATE_PROFILE',
      profileinfo: task,
    });
  };
  const updateEmail = event => {
    setEmail(event.target.value);
  };
  const updateMobileNumber = event => {
    setMobileNumber(event.target.value);
  };
  const updateDateofBirth = event => {
    setDateofBirth(event.target.value);
  };
  const updateOccupation = event => {
    setOccupation(event.target.value);
  };
  return (
    <>
      <div className="details-container">
        <div className="firstname">
          <h1 className="input-title">Firstname</h1>
          <input
            type="text"
            className="profile-input"
            value={global.loggedinUserFirstname}
          />
        </div>
        <div className="firstname">
          <h1 className="input-title">Lastname</h1>
          <input
            type="text"
            className="profile-input"
            value={global.loggedinUserLastname}
          />
        </div>

        <div className="firstname">
          <h1 className="input-title">Email</h1>
          <input
            type="text"
            className="profile-input"
            defaultValue={email}
            onChange={updateEmail}
          />
        </div>
        <div className="firstname">
          <h1 className="input-title">Mobile Number</h1>
          <input
            type="number"
            className="profile-input"
            defaultValue={mobilenumber}
            onChange={updateMobileNumber}
          />
        </div>
        <div className="firstname">
          <h1 className="input-title">Date of Birth</h1>
          <input
            type="date"
            className="profile-input"
            defaultValue={dateofbirth}
            onChange={updateDateofBirth}
          />
        </div>
        <div className="firstname">
          <h1 className="input-title">Occupation</h1>
          <input
            type="text"
            className="profile-input"
            defaultValue={occupation}
            onChange={updateOccupation}
          />
        </div>
      </div>
      <button
        type="button"
        className="addCourse update-btn"
        onClick={() => updateProfileDetails()}
      >
        Update
      </button>
    </>
  );
}

export default ProfileDetails;
