import React from 'react';
import './index.css';
import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import Header from '../../components/Header';
import Discussion from '../../components/Discussion';
import AddDiscussionPopup from '../../components/AddDiscussionPopup';
import 'reactjs-popup/dist/index.css';

function DiscussionForum() {
  const initialState = useSelector(state => state);
  const { global } = initialState;
  const { discussionList } = global;

  return (
    <>
      <Header isHome />
      <div className="body">
        <div className="content">
          <div className="discussions-box">
            <h1 className="courses">Discussions</h1>

            <Popup
              trigger={
                <button id="enroll-btn" type="button" className="new-thread">
                  + New Thread
                </button>
              }
              modal
              nested
            >
              {close => (
                <div className="modal">
                  <button className="close" type="button" onClick={close}>
                    &times;
                  </button>
                  <AddDiscussionPopup />
                  <div className="actions">
                    <button
                      type="button"
                      className="closeBtn"
                      onClick={() => {
                        // console.log('modal closed ');
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
          <div className="discussions-container">
            {discussionList.map(eachItem => (
              <Discussion discussionDetails={eachItem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscussionForum;
