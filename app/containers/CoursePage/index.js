import './index.css';
import CourseContent from 'components/CourseContent';
import Header from 'components/Header';
import { BiArrowBack } from 'react-icons/bi';
import React, { useState } from 'react';

import { ImCross } from 'react-icons/im';
import { useSelector } from 'react-redux';
import VideoSection from 'components/VideoSection';

function CoursePage() {
  const initialState = useSelector(state => state);
  const { global } = initialState;
  const { detailedCourseInfo } = global;
  const { selectedClassInfo } = global;

  const [isSidebarVisible, setisSidebarVisible] = useState(true);
  const [courseSidebar, setCourseSidebar] = useState('course-sidebar-display');
  const [menuBox, setMenuBox] = useState(false);

  const displaySidebar = () => {
    setisSidebarVisible(!isSidebarVisible);
    setMenuBox(!menuBox);
    if (isSidebarVisible) {
      setCourseSidebar('course-sidebar');
    } else {
      setCourseSidebar('course-sidebar-display');
    }
  };
  return (
    <>
      <Header isHome />
      <div className="description-container">
        <div className="description-text-container">
          <h1 className="course-title1">{detailedCourseInfo.courseTitle}</h1>
          <p className="course-description">
            {detailedCourseInfo.courseDescription}
          </p>
        </div>
      </div>
      <div className="course-contents">
        <div className={courseSidebar}>
          <div className="contents-group">
            <BiArrowBack className="back-arrow" />
            <h1 className="contents">Contents</h1>
            <ImCross className="cross-icon" onClick={displaySidebar} />
          </div>
          <div className="video-info">
            {detailedCourseInfo.courseContents.map(eachItem => (
              <CourseContent
                key={eachItem.id}
                classContent={eachItem}
                className="video-selected"
              />
            ))}
          </div>
        </div>
        <VideoSection videoContent={selectedClassInfo} />
      </div>
    </>
  );
}

export default CoursePage;
