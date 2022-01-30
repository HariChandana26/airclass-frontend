import React ,{useEffect}from 'react';
import './index.css';
import { useSelector ,useDispatch} from 'react-redux';
import Popup from 'reactjs-popup';
import Header from '../../components/Header';
import Discussion from '../../components/Discussion';
import AddDiscussionPopup from '../../components/AddDiscussionPopup';
import 'reactjs-popup/dist/index.css';
import { BiArrowBack } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../App/constants';
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from "react-promise-tracker";

function DiscussionForum() {
  const dispatch = useDispatch();
  const initialState = useSelector(state => state);
  const { global } = initialState;
  const { discussionList } = global;
  useEffect(() => {
    const getDiscussions =  () => {
      trackPromise(
       axios.get(`${URL}/v1/discussions`)
      .then(function(response) {
        if (response.statusText === 'OK' && response.status === 200) {
          const resData = response;
          dispatch({
            type: 'FETCH_ALL_DISCUSSIONS',
            discussioninfo: resData.data.discussions,
          });
        }
      }).catch(function(error) {
        console.log(error);
      }))
    };
      
    getDiscussions();
  }, []);
 

  return (
    <>
      <Header isHome />
      <div className="body">
        <div className="content">
        <NavLink className="nav-link" to="/homepage">
              <BiArrowBack className="back-arrow" />
            </NavLink>
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
            {discussionList && discussionList.map(eachItem => (
              <Discussion key={eachItem._id} discussionDetails={eachItem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscussionForum;
