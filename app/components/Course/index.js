import './index.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import courseimg from '../../images/course-img.png';

function Course(props) {
  const { coursedetails, isenroll } = props;
  const dispatch = useDispatch();
  const enrollCourse = task =>
    dispatch({
      type: 'ENROLL_COURSE',
      courseinfo: task,
    });
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
    <div className="course-container">
      <img alt="course" className="course-image" src={courseimg} />
      <div className="course-details">
        <h1 className="course-title">{coursedetails.courseTitle}</h1>
        <p className="course-info">{coursedetails.courseInfo}</p>

        {isenroll && enrollbtn}
      </div>
    </div>
  );
}

Course.propTypes = {
  coursedetails: PropTypes.object.isRequired,
  isenroll: PropTypes.bool.isRequired,
};

export default Course;
