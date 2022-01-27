import React, { useState } from 'react';
import './index.css';
import CommentsList from 'components/CommentsList';
import { AiOutlineMenuFold, AiFillLike } from 'react-icons/ai';

import { BiLike } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function VideoSection(props) {
  const { videoContent, displaySidebar } = props;

  const [styleNotes, setStyleNotes] = useState('notes');
  const [styleComments, setStyleComments] = useState('comments-hide');
  const [styleNotesContainer, setStyleNotesContainer] = useState(
    'notes-container',
  );
  const [styleCommentsContainer, setStyleCommentsContainer] = useState(
    'comments-container-hide',
  );

  const [inputValue, setInputValue] = useState('');
  const newCommentsArray = videoContent.classComments;

  const dispatch = useDispatch();
  const addComment = () => {
    dispatch({
      type: 'ADD_COMMENT',
      newComment: inputValue,
    });
    clearCommentInput();
  };
  const likeClass = () =>
    dispatch({
      type: 'LIKE_CLASS',
      classLikedInfo: videoContent,
    });

  const updateInputValue = event => {
    setInputValue(event.target.value);
  };
  const changeStyleComments = () => {
    setStyleComments('comments');
    setStyleNotes('notes-hide');
    setStyleNotesContainer('notes-container-hide');
    setStyleCommentsContainer('comments-container');
  };
  const changeStyleNotes = () => {
    setStyleNotes('notes');
    setStyleComments('comments-hide');
    setStyleNotesContainer('notes-container');
    setStyleCommentsContainer('comments-container-hide');
  };
  const displaySidebarMenu = () => {
    displaySidebar();
  };
  const clearCommentInput = () => {
    setInputValue('');
  };

  return (
    <div className="video-content">
      <div className="title-box-course">
        <div className="menu-icon-box">
          <AiOutlineMenuFold
            className="menu-icon"
            onClick={displaySidebarMenu}
          />
        </div>

        <h1 className="title">{videoContent.classTitle}</h1>
      </div>
      <div className="coursepage-content">
        <div className="video-display">
          <div className="video-player">
            <div className="wise-iframe-wrapper">
              <iframe
                src={videoContent.classVideo}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="like-section">
            <button
              type="button"
              className="like-box"
              onClick={() => likeClass()}
            >
              {videoContent.classLiked ? (
                <AiFillLike className="liked-icon" />
              ) : (
                <BiLike className="like-icon" />
              )}
              <h1 className="like">Like</h1>
            </button>
          </div>
        </div>

        <div className="notes-comments-container">
          <div className="notes-comments">
            <div
              role="button"
              onClick={changeStyleNotes}
              onKeyDown={() => {}}
              tabIndex={0}
            >
              <h1 className={styleNotes}>Notes</h1>
            </div>
            <div
              role="button"
              onKeyDown={() => {}}
              tabIndex={0}
              onClick={changeStyleComments}
            >
              <h1 className={styleComments}>Comments</h1>
            </div>
          </div>
          <div className={styleNotesContainer}>
            <ul className="notes-list">
              {/* {videoContent.classNotes.map(eachItem => (
                <li className="notes-text">{eachItem}</li>
              ))} */}
            </ul>
          </div>
          <div className={styleCommentsContainer}>
            <input
              type="text"
              placeholder="Commenting as Hari Chandana Sapare"
              className="comment-input"
              value={inputValue}
              onChange={updateInputValue}
            />
            <button
              type="button"
              className="comment-button"
              onClick={() => addComment()}
            >
              Comment
            </button>
            {/* {newCommentsArray.map(eachItem => (
              <CommentsList commentsItem={eachItem} />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

VideoSection.propTypes = {
  videoContent: PropTypes.object.isRequired,
  displaySidebar: PropTypes.func.isRequired,
};

export default VideoSection;
