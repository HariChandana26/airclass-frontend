import './index.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import courseimg from '../../images/course-img.png';
// import { useSelector } from 'react-redux';

function Course(props) {
  // const courses = useSelector(state => state);
  // const { global } = courses;
  const { coursedetails, isenroll } = props;
  const dispatch = useDispatch();
  const enrollCourse = task =>
    dispatch({
      type: 'ENROLL_COURSE',
      courseinfo: task,
    });
  /*
    const courseSelected =()=>
    dispatch({
      type: 'SELECT_COURSE',
      selectedCourse: coursedetails,
    });
    */
  let enrollbtn;
  const status = coursedetails.isenrolled;
  if (isenroll) {
    enrollbtn = status ? (
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
      <div className="course-container">
        <img alt="course" className="course-image" src={courseimg} />
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
  isenroll: PropTypes.bool.isRequired,
};

export default Course;
