import './index.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddCoursePopup() {
  const dispatch = useDispatch();
  const addCourse = (task = [coursetitleValue, courseinfoValue]) => {
    if (!coursetitleValue || !courseinfoValue) {
      // alert('enter required details');
    } else {
      dispatch({
        type: 'ADD_COURSE',
        courseinfo: task,
      });
    }
  };
  const [coursetitleValue, setcoursetitleValue] = useState('');
  const [courseinfoValue, setcourseinfoValue] = useState('');
  const updateTitleInput = event => {
    setcoursetitleValue(event.target.value);
  };
  const updateInfoInput = event => {
    setcourseinfoValue(event.target.value);
  };
  return (
    <div className="addcourseContainer">
      <div className="labelInputGroup">
        <h1 className="courseTitle">Course Title</h1>
        <input
          type="text"
          className="coursetitleInput"
          placeholder="enter course title"
          value={coursetitleValue}
          onChange={updateTitleInput}
        />
      </div>

      <div className="labelInputGroup">
        <h1 className="courseTitle">Course Description</h1>
        <textarea
          rows="5"
          cols="60"
          name="description"
          onChange={updateInfoInput}
          className="courseinfoInput"
          placeholder="enter course description"
          value={courseinfoValue}
        />
      </div>
      <button
        id="enroll-btn"
        type="button"
        className="addCourse "
        onClick={() => addCourse()}
      >
        Add Course
      </button>
    </div>
  );
}

export default AddCoursePopup;
