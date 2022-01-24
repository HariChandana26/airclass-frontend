import './index.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddDiscussionPopup() {
  const dispatch = useDispatch();
  const [discussiontitleValue, setdiscussiontitleValue] = useState('');
  const [discussioninfoValue, setdiscussioninfoValue] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const updateTitleInput = event => {
    setdiscussiontitleValue(event.target.value);
  };
  const updateInfoInput = event => {
    setdiscussioninfoValue(event.target.value);
  };
  const addDiscussion = (
    task = [discussiontitleValue, discussioninfoValue],
  ) => {
    if (!discussiontitleValue || !discussioninfoValue) {
      setError('Enter Required details');
      setSuccess('');
    } else {
      dispatch({
        type: 'ADD_DISCUSSION',
        discussioninfo: task,
      });
      setSuccess('Discussion posted successfully');
      setError('');
    }
  };

  return (
    <>
      <div className="addcourseContainer">
        <div className="labelInputGroup">
          <h1 className="courseTitle">Discussion Title</h1>
          <input
            type="text"
            className="coursetitleInput"
            placeholder="enter discussion title"
            value={discussiontitleValue}
            onChange={updateTitleInput}
          />
        </div>

        <div className="labelInputGroup">
          <h1 className="courseTitle">Discussion Description</h1>
          <textarea
            rows="5"
            cols="60"
            name="description"
            onChange={updateInfoInput}
            className="courseinfoInput"
            placeholder="enter discussion description"
            value={discussioninfoValue}
          />
        </div>
        <button
          type="button"
          id="enroll-btn"
          className="addCourse "
          onClick={() => addDiscussion()}
        >
          Post Discussion
        </button>
        {error && (
          <>
            <p style={{ color: 'red' }}>{error}</p>
            <br />
          </>
        )}
        {success && (
          <>
            <p style={{ color: 'green' }}>{success}</p>
            <br />
          </>
        )}
      </div>
    </>
  );
}

export default AddDiscussionPopup;
