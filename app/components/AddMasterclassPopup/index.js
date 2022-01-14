import './index.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddMasterclassPopup() {
  const dispatch = useDispatch();
  const addMasterclass = (
    task = [
      masterclassTitleValue,
      masterclassSpeakerName,
      masterclassSpeakerProfession,
      masterclassSpeakerCollege,
    ],
  ) => {
    dispatch({
      type: 'ADD_MASTERCLASS',
      courseinfo: task,
    });
  };
  const [masterclassTitleValue, setmasterclassTitleValue] = useState('');
  const [masterclassSpeakerName, setmasterclassSpeakerName] = useState('');
  const [
    masterclassSpeakerProfession,
    setmasterclassSpeakerProfession,
  ] = useState('');
  const [masterclassSpeakerCollege, setmasterclassSpeakerCollege] = useState(
    '',
  );
  const updateTitleInput = event => {
    setmasterclassTitleValue(event.target.value);
  };
  const updateSpeakerInput = event => {
    setmasterclassSpeakerName(event.target.value);
  };
  const updateSpeakerProfession = event => {
    setmasterclassSpeakerProfession(event.target.value);
  };
  const updateSpeakerCollege = event => {
    setmasterclassSpeakerCollege(event.target.value);
  };
  return (
    <div className="addcourseContainer">
      <div className="labelInputGroup">
        <h1 className="courseTitle">Masterclass Title</h1>
        <input
          type="text"
          className="masterclassTitleInput"
          placeholder="enter masterclass title"
          value={masterclassTitleValue}
          onChange={updateTitleInput}
        />
      </div>
      <div className="labelInputGroup">
        <h1 className="courseTitle">Masterclass Speaker</h1>
        <input
          type="text"
          className="masterclassTitleInput"
          placeholder="enter masterclass speaker"
          value={masterclassSpeakerName}
          onChange={updateSpeakerInput}
        />
      </div>
      <div className="labelInputGroup">
        <h1 className="courseTitle">Speaker Profession</h1>
        <input
          type="text"
          className="masterclassTitleInput"
          placeholder="enter masterclass speaker profession"
          value={masterclassSpeakerProfession}
          onChange={updateSpeakerProfession}
        />
      </div>
      <div className="labelInputGroup">
        <h1 className="courseTitle">Speaker College</h1>
        <input
          type="text"
          className="masterclassTitleInput"
          placeholder="enter masterclass speaker college"
          value={masterclassSpeakerCollege}
          onChange={updateSpeakerCollege}
        />
      </div>
      <button
        id="enroll-btn"
        type="button"
        className="addMasterclass enroll"
        onClick={() => addMasterclass()}
      >
        Add Masterclass
      </button>
    </div>
  );
}

export default AddMasterclassPopup;
