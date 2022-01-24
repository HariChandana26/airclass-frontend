import './index.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Course from 'components/Course';
import Masterclass from 'components/Masterclass';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
// import { Redirect } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Homepage() {
  // if (!authorized) {
  //   return <Redirect to="/login" />;
  // }
  const config = {
    dots: true,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings = config;
  const initialState = useSelector(state => state);
  const { global } = initialState;
  const isHome = false;

  const searchedAllCoursesInfo = global.searchResultsAllCourses;
  const searchedEnrolledCoursesInfo = global.searchResultsEnrolledCourses;
  const searchedMasterclassInfo = global.searchResultsMasterClasses;
  let noAllResults = null;
  let noEnrolledResults = null;
  let noMasterclassResults = null;
  if (searchedAllCoursesInfo.length === 0) {
    noAllResults = <h1 className="no-search-results">No results found</h1>;
  }
  if (searchedEnrolledCoursesInfo.length === 0) {
    noEnrolledResults = (
      <h1 className="no-search-results">No Courses available</h1>
    );
  }
  if (searchedMasterclassInfo.length === 0) {
    noMasterclassResults = (
      <h1 className="no-search-results">No results found</h1>
    );
  }

  return (
    <div className="page">
      <Header isHome={isHome} />
      <div className="body">
        <div className="content">
          <h3 className="displayname">Hi Hari Chandana Sapare,</h3>
          <div className="courses-container">
            <div className="courses-box">
              <h1 className="courses">Courses</h1>
            </div>
          </div>
          {noAllResults}
          <Slider {...settings}>
            {searchedAllCoursesInfo.map(eachItem => (
              <Course key={eachItem.id} coursedetails={eachItem} isenroll />
            ))}
            {searchedAllCoursesInfo.map(eachItem => (
              <Course key={eachItem.id} coursedetails={eachItem} isenroll />
            ))}
          </Slider>

          <div className="arrow-container">
            <MdOutlineArrowForwardIos className="arrow" />
          </div>

          <div className="courses-container">
            <div className="courses-box">
              <h1 className="courses">Enrolled Courses</h1>
            </div>
          </div>
          {noEnrolledResults}
          <div className="courses-display">
            <div className="courses-cards">
              {searchedEnrolledCoursesInfo.map(eachItem => (
                <Course
                  key={eachItem.id}
                  coursedetails={eachItem}
                  isenroll={false}
                />
              ))}
            </div>
            <div className="arrow-container">
              <MdOutlineArrowForwardIos className="arrow" />
            </div>
          </div>
          <div className="courses-container">
            <div className="courses-box">
              <h1 className="courses">Masterclass Series</h1>
            </div>
          </div>
          {noMasterclassResults}
          <div className="masterclass-container">
            {searchedMasterclassInfo.map(eachItem => (
              <Masterclass key={eachItem.id} coursedetails={eachItem} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Homepage;
