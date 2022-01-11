import './index.css';
import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import logo from '../../images/logo2.png';
import discussion from '../../images/discussion3.png';

function Header(props) {
  const firstname = 'Hari Chandana';
  const lastname = 'Sapare';
  const initial = firstname.slice(0, 1) + lastname.slice(0, 1);
  const { isHome } = props;
  const [searchInput, setsearchInput] = useState('');
  const dispatch = useDispatch();
  const updateSearchValue = event => {
    setsearchInput(event.target.value);
  };

  const searchCourse = () =>
    dispatch({
      type: 'SEARCH_COURSE',
      searchinfo: searchInput,
    });
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-search">
          <a href="http://localhost:4001">
            <img className="header-logo" src={logo} alt="website-logo" />
          </a>
          <div className="searchbox">
            <IoIosSearch className="search-logo" />
            <input
              placeholder="search"
              className="input"
              type="search"
              value={searchInput}
              onChange={updateSearchValue}
              onKeyUp={() => searchCourse(searchInput)}
            />
          </div>
        </div>

        <div className="header-box">
          <img className="msg-icon" src={discussion} alt="discussion-logo" />
          {isHome && (
            <a href="http://localhost:3004/" className="home">
              Home
            </a>
          )}
          <div className="user-details-container">
            <p className="name">
              {firstname} {lastname}
            </p>
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
Header.propTypes = {
  isHome: PropTypes.bool.isRequired,
};
export default Header;
