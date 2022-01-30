import React from 'react';
import './index.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../containers/App/constants';
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from "react-promise-tracker";
import LoadingSpinnerComponent from 'components/LoadingIndicator';

function Discussion(props) {
  const { promiseInProgress } = usePromiseTracker()
  const { discussionDetails } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const updateSelectedDiscussion = () => {
    const getSelectedDiscussionInfo = () => {
      trackPromise(
       axios.get(`${URL}/v1/discussions/discussionsReply/${discussionDetails._id}`)
      .then(function(response){
        if (response.statusText === 'OK' && response.status === 200) {
          dispatch({
            type: 'UPDATE_SELECTED_DISCUSSION',
            discussioninfo: [discussionDetails,response.data],
          });
          history.push('/discussionsolutions');
        }
      }). catch (function(error) {
        console.log(error);
      }))
    };
    getSelectedDiscussionInfo();
  };
 
  return (
    promiseInProgress ? <LoadingSpinnerComponent/>: 
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
                {discussionDetails.initialName}
              </p>
            </div>
            <p className="name1">{discussionDetails.name}</p>
          </div>
        </div>

        <p className="discussion-details">{discussionDetails.discussionInfo}</p>
      </div>
  );
}
Discussion.propTypes = {
  discussionDetails: PropTypes.object.isRequired,
};

export default Discussion;
