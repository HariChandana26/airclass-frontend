import './index.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import axios from 'axios';
import { URL } from '../../containers/App/constants';

function Course(props) {
  const initialState = useSelector(state => state);
  const { global } = initialState;
  const { coursedetails, enrolledCourses, isenroll } = props;
  const dispatch = useDispatch();
  let filterCourse = [];
  const enrollCourse = () => {
    axios({
      method: 'POST',
      url: `${URL}/v1/courses/enrollCourse/${coursedetails._id}`,
      data: {
        user_id: global.loggedinUserId,
      },
    })
      .then(function(response) {
        if (response.statusText === 'OK' && response.status === 200) {
          const getCourseInfo = async () => {
            const response2 = await axios({
              method: 'GET',
              url: `${URL}/v1/courses/courseSingle/${coursedetails._id}`,
            });
            try {
              if (response2.statusText === 'OK' && response2.status === 200) {
                dispatch({
                  type: 'ENROLL_COURSE',
                  enrolledcourse: response2.data.course,
                });
              }
            } catch (error) {
              console.log(error);
            }
          };
          getCourseInfo();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  if (enrolledCourses) {
    filterCourse = enrolledCourses.filter(el => el === coursedetails._id);
  }
  const updateSelectedCourse = () => {
    const getSelectedCourseInfo = async () => {
      const response = await axios({
        method: 'GET',
        url: `${URL}/v1/contents/${coursedetails._id}`,
      });
      try {
        if (response.statusText === 'OK' && response.status === 200) {
          dispatch({
            type: 'UPDATE_SELECTED_COURSE',
            courseinfo: response.data,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSelectedCourseInfo();
  };

  let enrollbtn;
  if (isenroll) {
    enrollbtn =
      filterCourse.length !== 0 ? (
        <button id="enroll-btn" type="button" className="enrolled">
          enrolled
        </button>
      ) : (
        <button
          id="enroll-btn"
          type="button"
          className="enroll"
          onClick={() => enrollCourse(coursedetails)}
        >
          enroll
        </button>
      );
  } else {
    enrollbtn = <></>;
  }

  return (
    <NavLink className="nav-link" to={isenroll ? '/homepage' : '/coursepage'}>
      <div
        tabIndex={0}
        role="button"
        onKeyDown={() => updateSelectedCourse()}
        onClick={() => updateSelectedCourse()}
        className="course-container"
      >
        <img
          alt="course"
          className="course-image"
          src={coursedetails.courseImage}
        />
        <div className="course-details">
          <h1 className="course-title">{coursedetails.courseTitle}</h1>
          <p className="course-info">{coursedetails.courseInfo}</p>

          {isenroll && enrollbtn}
        </div>
      </div>
    </NavLink>
  );
}

Course.propTypes = {
  coursedetails: PropTypes.object.isRequired,
  enrolledCourses: PropTypes.array,
  isenroll: PropTypes.bool.isRequired,
};

export default Course;
