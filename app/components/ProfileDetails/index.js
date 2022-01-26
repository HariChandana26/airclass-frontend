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
  const [success, setSuccess]=useState('');
  const [error, setError]=useState('');
  // const [dateofbirth, setDateofBirth] = useState(
  //   global.loggedinUserDateofBirth,
  // );
  // const [occupation, setOccupation] = useState(global.loggedinUserOccupation);
  const updateProfileDetails = (
    task = [email, mobilenumber],
  ) => {
    // if(email==global.loggedinUserEmail || mobilenumber==global.loggedinUserMobileNumber){
    //   setError("Please update details")
    //   setSuccess("");
    // }
    // else{
    dispatch({
      type: 'UPDATE_PROFILE',
      profileinfo: task,
    });
    setSuccess("Profile updated successfully");
    //setError("");
    
  };
  const updateEmail = event => {
    setEmail(event.target.value);
  };
  const updateMobileNumber = event => {
    setMobileNumber(event.target.value);
  };
  // const updateDateofBirth = event => {
  //   setDateofBirth(event.target.value);
  // };
  // const updateOccupation = event => {
  //   setOccupation(event.target.value);
  // };
  return (
    <>
      <div className="details-container">
        <div className="firstname">
          <h1 className="input-title">Name</h1>
          <input
            type="text"
            className="profile-input"
            value={global.loggedinUsername}
          />
        </div>
        {/* <div className="firstname">
          <h1 className="input-title">Lastname</h1>
          <input
            type="text"
            className="profile-input"
            value={global.loggedinUserLastname}
          />
        </div> */}

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
        {/* <div className="firstname">
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
        </div> */}
      </div>
      {success && (
          <>
            <p style={{ color: 'green' }}>{success}</p>
            <br />
          </>
        )}
        {error && (
        <>
          <br /> <p style={{ color: 'red' }}>{error}</p>
          <br />
        </>
      )}
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
