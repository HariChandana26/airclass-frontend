import React from 'react';
import './index.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Discussion(props) {
  const { discussionDetails } = props;

  const dispatch = useDispatch();

  const updateSelectedDiscussion = () => {
    dispatch({
      type: 'SELECT_DISCUSSION',
      discussioninfo: discussionDetails,
    });
  };
  return (
    <NavLink className="nav-link-discussion" to="/discussionsolutions">
      <div
        tabIndex={0}
        role="button"
        onKeyDown={() => updateSelectedDiscussion()}
        onClick={() => updateSelectedDiscussion()}
        className="discussion-box"
      >
        <div className="title-box1">
          <h1 className="discussion-title">
            {discussionDetails.discussionTitle}
          </h1>
          <div className="user-details-container1">
            <div className="initial-container2">
              <p className="initial2">
                {discussionDetails.discussionOwnerInitial}
              </p>
            </div>
            <p className="name1">{discussionDetails.discussionOwnerName}</p>
          </div>
        </div>

        <p className="discussion-details">{discussionDetails.discussionInfo}</p>
      </div>
    </NavLink>
  );
}
Discussion.propTypes = {
  discussionDetails: PropTypes.object.isRequired,
};

export default Discussion;
