import React, { useState } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import DiscussionSolution from '../../components/DiscussionSolution';
import Header from '../../components/Header';

function DiscussionSoultionsPage() {
  const initialState = useSelector(state => state);
  const { global } = initialState;
  const { selectedDiscussion, selectedDiscussionSolutions } = global;
  const [replyValue, setReplyValue] = useState('');
  const [toggleReply, setToggleReply] = useState(false);
  const updateReply = event => {
    setReplyValue(event.target.value);
  };
  const openReply = () => {
    setToggleReply(!toggleReply);
  };

  const dispatch = useDispatch();
  const updateSolution = () => {
    dispatch({
      type: 'ADD_SOLUTION',
      solutioninfo: replyValue,
    });
  };
  return (
    <>
      <Header isHome />

      <div className="body">
        <div className="content">
          <h1 className="courses discussion">Discussions</h1>
          <NavLink className="nav-link" to="/discussionforum">
            <BiArrowBack className="back-arrow backarrow" />
          </NavLink>
          <div className="discussion-box">
            <div className="title-box1">
              <h1 className="course-title">
                {selectedDiscussion.discussionTitle}
              </h1>
              <div className="user-details-container1">
                <div className="initial-container2">
                  <p className="initial2">
                    {selectedDiscussion.discussionOwnerInitial}
                  </p>
                </div>
                <p className="name1">
                  {selectedDiscussion.discussionOwnerName}
                </p>
              </div>
            </div>
            <p className="discussion-details">
              {selectedDiscussion.discussionInfo}
            </p>

            <button
              type="button"
              onClick={() => openReply()}
              className="reply-btn1"
            >
              Reply
            </button>
            <div className={toggleReply ? 'reply-box' : 'no-reply-box'}>
              <textarea
                rows="5"
                cols="60"
                name="description"
                onChange={updateReply}
                className="courseinfoInput reply-area"
                placeholder="enter your reply here"
                value={replyValue}
              />
              <button
                onClick={() => updateSolution()}
                type="button"
                className="reply-btn"
              >
                Reply
              </button>
            </div>
          </div>
          <h1 className="courses">SOLUTIONS</h1>
          <div className="solutions">
            {selectedDiscussionSolutions.solutions.map(eachItem => (
              <DiscussionSolution solutionslist={eachItem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscussionSoultionsPage;
