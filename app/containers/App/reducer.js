/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import understanding5GImg from '../../images/understanding-5G.png';

const detailedMasterClassInfo = [
  {
    id: 1,
    masterclassImage: understanding5GImg,
    masterclassTitle: 'Understanding 5G',
    masterclassSpeaker: 'Rakesh Mishra',
    speakerProfession: 'Co-Founder Uhana',
    speakerCollege: 'IIT Madras',
    classVideo: 'https://www.youtube.com/embed/_CTUs_2hq6Y',
    classNotes: ['5G is the latest generation of mobile internet connectivity'],
    comments: [
      {
        initial: 'HS',
        username: 'Hari Chandana Sapare',
        comment: 'this video lecture is very good',
      },
    ],
    classLiked: false,
  },
  {
    id: 2,
    masterclassImage:
      'https://res.cloudinary.com/due4dmz2b/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fd15dkfioxfhy94.cloudfront.net%2Ftenxiitian_prod%2Fprograms%2Fmaster-class%2Fpriyatham_bollimpalli%2Fvideo_thumb.png',
    masterclassTitle: 'Product Mindest',
    masterclassSpeaker: 'Priyatham Bollimpalli',
    speakerProfession: 'Micorsoft',
    speakerCollege: 'IIT Guwahati',
    classVideo: 'https://www.youtube.com/embed/EEBQUn313BA',
    classNotes: ['5G is the latest generation of mobile internet connectivity'],
    comments: [
      {
        initial: 'HS',
        username: 'Hari Chandana Sapare',
        comment: 'this video lecture is very good',
      },
    ],
    classLiked: false,
  },
  {
    id: 3,
    masterclassImage:
      'https://res.cloudinary.com/due4dmz2b/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fd1tgh8fmlzexmh.cloudfront.net%2Fotg_prod%2Fmedia%2Fmaster-classes%2FMasterclass_with_Hari_TN_2X.png',
    masterclassTitle: 'Coding',
    masterclassSpeaker: 'hari TN',
    speakerProfession: 'Co-Founder Bigbasket',
    speakerCollege: 'IIM CULCATTA',
    classVideo: 'https://www.youtube.com/embed/HIj8wU_rGIU',
    classNotes: ['5G is the latest generation of mobile internet connectivity'],
    comments: [
      {
        initial: 'HS',
        username: 'Hari Chandana Sapare',
        comment: 'this video lecture is very good',
      },
    ],
    classLiked: false,
  },
];
// The initial state of the App
export const initialState = {
  isLoading: true,
  allCoursesInfo: [],
  loggedinUserRole: 'user',
  loggedinUserId: '61f123f3e594244b30725cec',
  loggedinUsername: 'Hari Chandana Sapare',
  loggedinUserFirstname: 'Hari Chandana',
  loggedinUserLastname: 'Sapare',
  loggedinUserInitial: 'HS',
  loggedinUserEmail: 'sapareharichandana@gmail.com',
  loggedinUserPurchased: [],
  loggedinUserMobileNumber: '1234567890',
  loggedinUserDateofBirth: '00/00/0000',
  loggedinUserOccupation: 'Student',
  initialAllCoursesInfo: [],
  initialEnrolledCourseInfo: [],

  masterclassInfo: detailedMasterClassInfo,
  searchResultsAllCourses: [],
  searchResultsEnrolledCourses: [],
  searchResultsMasterClasses: detailedMasterClassInfo,
  selectedCourseInfo: [
    {
      classTitle: 'Introduction to Competitive Programming',
      classLiked: 0,
      classNotes: [],
      comments: [],
      classVideo: 'https://www.youtube.com/embed/pV6i3PucDMA',
      classDuration: '20min',
      _id: '61f1d8fe114c333330203b51',
      courseID: {
        description:
          'Competitive Programming helps you become a great Programmer and crack coding interviews and competitons. In this program you will learn Competitive Programming helps you become a great Programmer and crack coding interviews and competitons. In this program you will learn',
        courseContents: [],
        price: '1000',
        courseImage:
          'https://admiring-ritchie-224d41.netlify.app/81a3666bb7497f4bf6a67c189e4ba378.png',
        enrolledUsers: 1,
        watchHours: 50,
        _id: '61f1d8d3114c333330203b42',
        courseTitle: 'Backend Development',
        courseInfo:
          'Build robust, scalable and secure backend APIs using the most sought after technologies in web development. Design and architect backends for data intensive and real time applications and deploy them on cloud.',
        timestamp: '2022-01-26T23:27:15.672Z',
        __v: 0,
      },
      timestamp: '2022-01-26T23:27:58.439Z',
      __v: 0,
    },
  ],
  commentsList: [
    {
      _id: 1,
      initial: 'HS',
      username: 'Hari Chandana Sapare',
      comment: 'this video lecture is very good',
    },
  ],
  selectedClassInfo: {},
  selectedMasterclassInfo: detailedMasterClassInfo[0],
  discussionList: [
    {
      id: 1,
      discussionTitle: 'How to setup ide how to setup ide how to setup ide',
      discussionInfo:
        'How to setup ide for practising coding quesions How to setup ide for practising coding quesions How to setup ide for practising coding quesions How to setup ide for practising coding quesions How to setup ide for practising coding quesions How to setup ide for practising coding quesions How to setup ide for practising coding quesions',
      discussionOwnerName: 'Hari Chandana Sapare',
      discussionOwnerInitial: 'HS',
    },
    {
      id: 2,
      discussionTitle: 'How to update ide',
      discussionInfo:
        'How to update ide for practising coding quesions.........................',
      discussionOwnerName: 'Hari Chandana Sapare',
      discussionOwnerInitial: 'HS',
    },
  ],
  selectedDiscussion: {
    id: 1,
    discussionTitle: 'How to setup ide',
    discussionInfo:
      'How to setup ide for practising coding quesions.........................',
    discussionOwnerName: 'Hari Chandana Sapare',
    discussionOwnerInitial: 'HS',
  },
  discussionSolutions: [
    {
      id: 1,
      solutions: [
        {
          id: 1,
          discussionOwnerName: 'Hari Chandana Sapare',
          discussionOwnerInitial: 'HS',
          discussionSolution: 'Setup ide in the below way',
        },
        {
          id: 2,
          discussionOwnerName: 'Hari Chandana Sapare',
          discussionOwnerInitial: 'HS',
          discussionSolution: '...............................................',
        },
      ],
    },
    {
      id: 2,
      solutions: [
        {
          id: 1,
          discussionOwnerName: 'XXX YYYYYYYY',
          discussionOwnerInitial: 'XY',
          discussionSolution: 'Update ide in the below way',
        },
        {
          id: 2,
          discussionOwnerName: 'Hari Chandana Sapare',
          discussionOwnerInitial: 'HS',
          discussionSolution: '...............................................',
        },
      ],
    },
  ],
  selectedDiscussionSolutions: {
    id: 1,
    solutions: [
      {
        id: 1,
        discussionOwnerName: 'Hari Chandana Sapare',
        discussionOwnerInitial: 'HS',
        discussionSolution: 'Setup ide in the below way',
      },
      {
        id: 2,
        discussionOwnerName: 'Hari Chandana Sapare',
        discussionOwnerInitial: 'HS',
        discussionSolution: '...............................................',
      },
    ],
  },
  discussionList:[],
  selectedDiscussion: [],
  selectedDiscussion: {},
  discussionSolutions: [],
  selectedDiscussionSolutions:{}
};

const wholeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'ENROLL_COURSE':
        draft.initialEnrolledCourseInfo = [
          ...draft.initialEnrolledCourseInfo,
          action.enrolledcourse,
        ];
        draft.searchResultsEnrolledCourses = [
          ...draft.searchResultsEnrolledCourses,
          action.enrolledcourse,
        ];
        draft.loggedinUserPurchased = [
          ...draft.loggedinUserPurchased,
          action.enrolledcourse._id,
        ];
        break;

      case 'SEARCH_COURSE':
        {
          const searchedAllCourses = state.initialAllCoursesInfo.filter(
            eachItem =>
              eachItem.courseTitle
                .toLowerCase()
                .includes(action.searchinfo.toLowerCase()),
          );
          const searchedEnrolledCourses = state.initialEnrolledCourseInfo.filter(
            eachItem =>
              eachItem.courseTitle
                .toLowerCase()
                .includes(action.searchinfo.toLowerCase()),
          );
          const searchedMasterClassess = state.masterclassInfo.filter(
            eachItem =>
              eachItem.masterclassTitle
                .toLowerCase()
                .includes(action.searchinfo.toLowerCase()),
          );
          draft.searchResultsAllCourses = searchedAllCourses;
          draft.allCoursesInfo = searchedAllCourses;
          draft.searchResultsEnrolledCourses = searchedEnrolledCourses;
          draft.searchResultsMasterClasses = searchedMasterClassess;
        }
        break;
      case 'ADD_COURSE':
        {
          const newCourseAdded = {
            id: state.initialAllCoursesInfo.length + 1,
            courseImage: action.courseinfo[0][0].data_url,
            courseTitle: action.courseinfo[1],
            courseInfo: action.courseinfo[2],
          };
          const newAllCoursesAfterAdd = [
            ...state.initialAllCoursesInfo,
            newCourseAdded,
          ];
          draft.initialAllCoursesInfo = newAllCoursesAfterAdd;

          draft.searchResultsAllCourses = newAllCoursesAfterAdd;
        }
        break;
      case 'ADD_MASTERCLASS':
        {
          const newMasterclass = {
            id: state.masterclassInfo.length + 1,
            masterclassImage: action.courseinfo[0][0].data_url,
            masterclassTitle: action.courseinfo[1],
            masterclassSpeaker: action.courseinfo[2],
            speakerProfession: action.courseinfo[3],
            speakerCollege: action.courseinfo[4],
          };

          const newMasterclassInfo = [...state.masterclassInfo, newMasterclass];
          draft.masterclassInfo = newMasterclassInfo;
          draft.searchResultsMasterClasses = newMasterclassInfo;
        }
        break;
      case 'PLAY_SELECTED_CLASS':
        draft.selectedClassInfo = action.selectedClass;
        break;
      case 'PLAY_SELECTED_MASTERCLASS':
        draft.selectedMasterclassInfo = action.selectedMasterclass;

        break;
      case 'UPDATE_SELECTED_COURSE':
        draft.selectedCourseInfo = action.courseinfo;
        const [selectedCourse] = action.courseinfo;
        draft.selectedClassInfo = selectedCourse;
        break;

      case 'ADD_COMMENT':
        {
          const newComment = {
            _id: action.commentsinfo._id,
            initial: state.loggedinUserInitial,
            username: state.loggedinUsername,
            comment: action.commentsinfo.comment,
          };
          draft.commentsList = [...draft.commentsList, newComment];
        }
        break;
      case 'LIKE_CLASS':
        draft.selectedClassInfo.classLiked = !draft.selectedClassInfo
          .classLiked;

        break;
      case 'UPDATE_PROFILE':
        {
          const [email, mobile, dateofbirth, occupation] = action.profileinfo;
          draft.loggedinUserEmail = email;
          draft.loggedinUserMobileNumber = mobile;
          draft.loggedinUserDateofBirth = dateofbirth;
          draft.loggedinUserOccupation = occupation;
        }
        break;
      case 'SELECT_DISCUSSION':
        {
          draft.selectedDiscussion = action.discussioninfo;

          const filterSolution = draft.discussionSolutions.filter(
            el => el.id === action.discussioninfo.id,
          );
          const [solution] = filterSolution;
          draft.selectedDiscussionSolutions = solution;
        }
        break;
        case 'UPDATE_SELECTED_DISCUSSION':{
          const selectedDiscussionDetails=action.discussioninfo[0]
          const solutions=action.discussioninfo[1]
          draft.selectedDiscussion=selectedDiscussionDetails
          draft.selectedDiscussionSolutions=solutions
        }
        break;
      case 'ADD_SOLUTION':
        {
          const newSolution = {
            _id: action.solutioninfo._id,
            name: action.solutioninfo.name,
            initialName: action.solutioninfo.initialName,
            discussionReply: action.solutioninfo.discussionReply,
          };
          draft.selectedDiscussionSolutions = [
            ...draft.selectedDiscussionSolutions,
            newSolution,
          ];
        }
        break;
      case 'ADD_DISCUSSION':
        {
          const newDiscussion = {
            _id: action.discussioninfo._id,
            discussionTitle: action.discussioninfo.discussionTitle,
            discussionInfo: action.discussioninfo.discussionInfo,
            name: action.discussioninfo.name,
            initialName: action.discussioninfo.initialName,
          };
          draft.discussionList = [...draft.discussionList, newDiscussion];
        }
        break;
      case 'USER_LOGGEDIN':
        draft.loggedinUsername = action.userinfo.name;
        draft.loggedinUserEmail = action.userinfo.email;
        draft.loggedinUserRole = action.userinfo.role;
        draft.loggedinUserId = action.userinfo.id;
        draft.loggedinUserInitial = action.userinfo.initialName;
        draft.loggedinUserPurchased = action.userinfo.purchasedCourse;
        draft.initialEnrolledCourseInfo = action.userinfo.purchasedCourse;
        draft.searchedEnrolledCourses = action.userinfo.purchasedCourse;
        break;
      case 'FETCH_ALL_COURSES':
        {
          draft.allCoursesInfo = action.coursesinfo;
          draft.initialAllCoursesInfo = action.coursesinfo;
          const enrolledCourses = draft.allCoursesInfo.filter(el => {
            if (draft.loggedinUserPurchased.includes(el._id)) {
              return el;
            }
          });
          draft.initialEnrolledCourseInfo = enrolledCourses;
          draft.searchResultsEnrolledCourses = enrolledCourses;
        }
        break;
        case 'FETCH_ALL_DISCUSSIONS':{
          draft.discussionList=action.discussioninfo;
        }
        break;
      case 'GET_COMMENTS':
        {
          const comments = action.commentsinfo.map(el => ({
            _id: el._id,
            initial: el.initialName,
            username: el.name,
            comment: el.comment,
          }));
          draft.commentsList = comments;
        }
        break;
      default:
        break;
    }
  });
/*
const reducers = combineReducers({
  initialAllCoursesInfo: appReducer,
  initialEnrolledCourseInfo: enrolledReducer,
  masterclassInfo: masterclassReducer,
});
*/
export default wholeReducer;
