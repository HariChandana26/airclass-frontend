import './index.css';
import React from 'react';
import { BsPlayCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Masterclass(props) {
  const { coursedetails } = props;
  return (
    <NavLink className="navLinkMasterclass" to="/masterclasspage">
      <div className="course-container">
        <div className="masterclass-image">
          <img
            alt="course"
            className="course-image"
            src={coursedetails.masterclassImage}
          />
          <BsPlayCircleFill className="play-icon" />
        </div>

        <div className="course-details">
          <h1 className="course-title">{coursedetails.masterclassTitle}</h1>
          <p className="course-info">{coursedetails.masterclassSpeaker}</p>
          <p className="course-info">{coursedetails.speakerProfession}</p>
          <p className="course-info">{coursedetails.speakerCollege}</p>
        </div>
      </div>
    </NavLink>
  );
}
Masterclass.propTypes = {
  coursedetails: PropTypes.object.isRequired,
};

export default Masterclass;
