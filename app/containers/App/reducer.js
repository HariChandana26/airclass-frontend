/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
// import { combineReducers } from 'redux';
const detailedCourseInfo = {
  id: 1,
  courseTitle: 'Computer Programming',
  courseDescription:
    'Competitive Programming helps you become a great Programmer and crack coding interviews and competitons. In this program you will learn Competitive Programming helps you become a great Programmer and crack coding interviews and competitons. In this program you will learn',
  courseContents: [
    {
      id: 1,
      classTitle: 'Introduction to Computer Programming',
      classDuration: '20min',
      classVideo: 'https://www.youtube.com/embed/E7wJTI-1dvQ',
      classNotes: [
        'The Rest parameter should be the last parameter',
        'The Rest parameter should be the last parameter',
      ],
      classComments: [
        {
          initial: 'SH',
          username: 'Hari Chandana',
          comment: 'this video lecture is very good',
        },
      ],
      classLiked: false,
    },
    {
      id: 2,
      classTitle: 'Details of Computer Programming',
      classDuration: '20min',
      classVideo: 'https://www.youtube.com/embed/E7wJTI-1dvQ',
      classNotes: [
        'The Rest parameter should be the last parameter',
        'The Rest parameter should be the last parameter',
      ],
      classComments: [
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
      classTitle: 'Introduction to Computer Programming',
      classDuration: '20min',
      classVideo: 'https://www.youtube.com/embed/E7wJTI-1dvQ',
      classNotes: [
        'The Rest parameter should be the last parameter',
        'The Rest parameter should be the last parameter',
      ],
      classComments: [
        {
          initial: 'HS',
          username: 'Hari Chandana Sapare',
          comment: 'this video lecture is very good',
        },
      ],
      classLiked: false,
    },
  ],
};

// The initial state of the App
export const initialState = {
  loggedinUsername: 'Hari Chandana Sapare',
  loggedinUserInitial: 'HS',
  initialAllCoursesInfo: [
    {
      id: 1,
      courseTitle: 'Artificial inteligence',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer',
      isEnrolled: false,
    },
    {
      id: 2,
      courseTitle: 'Web development',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer',
      isEnrolled: false,
    },
    {
      id: 3,
      courseTitle: 'Machine learning',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer Learn how to ace coding competitions and become a great programmer',
      isEnrolled: false,
    },
    {
      id: 4,
      courseTitle: 'Virtual Reality',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer',
      isEnrolled: false,
    },
  ],
  initialEnrolledCourseInfo: [
    {
      id: 1,
      courseTitle: 'Computer Programming',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer',
    },
    {
      id: 2,
      courseTitle: 'Computer Programming nnnnnnnnnn',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer',
    },
    {
      id: 3,
      courseTitle: 'Computer Programming',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer Learn how to ace coding competitions and become a great programmer',
    },
  ],

  masterclassInfo: [
    {
      id: 1,
      masterclassTitle: 'Understanding 5G',
      masterclassSpeaker: 'Rakesh Mishra',
      speakerProfession: 'Co-Founder Uhana',
      speakerCollege: 'IIT Madras',
    },
    {
      id: 2,
      masterclassTitle: 'Product Mindest',
      masterclassSpeaker: 'Rakesh Mishra',
      speakerProfession: 'Co-Founder Uhana',
      speakerCollege: 'IIT Madras',
    },
    {
      id: 3,
      masterclassTitle: 'Coding',
      masterclassSpeaker: 'Rakesh Mishra',
      speakerProfession: 'Co-Founder Uhana',
      speakerCollege: 'IIT Madras',
    },
  ],
  searchResultsAllCourses: [
    {
      id: 1,
      courseTitle: 'Artificial inteligence',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer',
      isEnrolled: false,
    },
    {
      id: 2,
      courseTitle: 'Web development',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer',
      isEnrolled: false,
    },
    {
      id: 3,
      courseTitle: 'Machine learning',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer Learn how to ace coding competitions and become a great programmer',
      isEnrolled: false,
    },
    {
      id: 4,
      courseTitle: 'Virtual Reality',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer',
      isEnrolled: false,
    },
  ],
  searchResultsEnrolledCourses: [
    {
      id: 1,
      courseTitle: 'Computer Programming',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer',
    },
    {
      id: 2,
      courseTitle: 'Computer Programming nnnnnnnnnn',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer',
    },
    {
      id: 3,
      courseTitle: 'Computer Programming',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer Learn how to ace coding competitions and become a great programmer',
    },
  ],
  searchResultsMasterClasses: [
    {
      id: 1,
      masterclassTitle: 'Understanding 5G',
      masterclassSpeaker: 'Rakesh Mishra',
      speakerProfession: 'Co-Founder Uhana',
      speakerCollege: 'IIT Madras',
    },
    {
      id: 2,
      masterclassTitle: 'Product Mindest',
      masterclassSpeaker: 'Rakesh Mishra',
      speakerProfession: 'Co-Founder Uhana',
      speakerCollege: 'IIT Madras',
    },
    {
      id: 3,
      masterclassTitle: 'Coding',
      masterclassSpeaker: 'Rakesh Mishra',
      speakerProfession: 'Co-Founder Uhana',
      speakerCollege: 'IIT Madras',
    },
  ],
  detailedCourseInfo: {
    id: 1,
    courseTitle: 'Computer Programming',
    courseDescription:
      'Competitive Programming helps you become a great Programmer and crack coding interviews and competitons. In this program you will learn Competitive Programming helps you become a great Programmer and crack coding interviews and competitons. In this program you will learn',
    courseContents: [
      {
        id: 1,
        classTitle: 'Introduction to Computer Programming',
        classDuration: '20min',
        classVideo: 'https://www.youtube.com/embed/E7wJTI-1dvQ',
        classNotes: [
          'The Rest parameter should be the last parameter',
          'The Rest parameter should be the last parameter',
        ],
        classComments: [
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
        classTitle: 'Details of Computer Programming',
        classDuration: '10min',
        classVideo: 'https://www.youtube.com/embed/QFaFIcGhPoM',
        classNotes: [
          'React makes it painless to create interactive UIs',
          'React makes it painless to create interactive UIs',
        ],
        classComments: [
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
        classTitle: 'Introduction to Computer Programming',
        classDuration: '20min',
        classVideo: 'https://www.youtube.com/embed/E7wJTI-1dvQ',
        classNotes: [
          'The Rest parameter should be the last parameter',
          'The Rest parameter should be the last parameter',
        ],
        classComments: [
          {
            initial: 'HS',
            username: 'Hari Chandana Sapare',
            comment: 'this video lecture is very good',
          },
        ],
        classLiked: false,
      },
    ],
  },
  selectedClassInfo: detailedCourseInfo.courseContents[0],
};

/* eslint-disable default-case, no-param-reassign */
/*
const appReducer = (state = initialState.initialAllCoursesInfo, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'ENROLL_COURSE': {
        return state.map(el => {
          if (el.id === action.courseinfo.id) {
            return { ...el, isenrolled: true };
          }
          return el;
        });
      }
      case 'SEARCH_COURSE': {
      }
    }
  });

const enrolledReducer = (
  state = initialState.initialEnrolledCourseInfo,
  action
) =>
  produce(state, draft => {
    switch (action.type) {
      case 'ENROLL_COURSE': {
        const newcourse = {
          id: state.length + 1,
          courseTitle: action.courseinfo.courseTitle,
          courseInfo: action.courseinfo.courseInfo,
        };
        return [...state, newcourse];
      }
    }
  });
const masterclassReducer = (state = initialState.masterclassInfo, action) =>
  produce(state, draft => {
    switch (action.type) {
      case '': {
      }
    }
  });
*/
const wholeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'ENROLL_COURSE':
        {
          const newAllCoursesInfo = state.initialAllCoursesInfo.map(el => {
            if (el.id === action.courseinfo.id) {
              return { ...el, isenrolled: true };
            }
            return el;
          });
          const newCourse = {
            id: state.initialEnrolledCourseInfo.length + 1,
            courseTitle: action.courseinfo.courseTitle,
            courseInfo: action.courseinfo.courseInfo,
          };

          const newEnrolledCoursesInfo = [
            ...state.initialEnrolledCourseInfo,
            newCourse,
          ];
          draft.initialAllCoursesInfo = newAllCoursesInfo;
          draft.initialEnrolledCourseInfo = newEnrolledCoursesInfo;
          draft.searchResultsAllCourses = newAllCoursesInfo;
          draft.searchResultsEnrolledCourses = newEnrolledCoursesInfo;
        }
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
          /*
        return {
          ...state,
          searchResultsAllCourses: searchedAllCourses,
          searchResultsEnrolledCourses: searchedEnrolledCourses,
        };
        */
          draft.searchResultsAllCourses = searchedAllCourses;
          draft.searchResultsEnrolledCourses = searchedEnrolledCourses;
          draft.searchResultsMasterClasses = searchedMasterClassess;
        }
        break;
      case 'ADD_COURSE':
        {
          const searchResults = state.initialAllCoursesInfo.filter(
            el =>
              el.courseTitle.toLowerCase() ===
              action.courseinfo[0].toLowerCase(),
          );
          if (searchResults.length !== 0) {
            // alert('course already added');
          } else {
            const newCourse = {
              id: state.initialAllCoursesInfo.length + 1,
              courseTitle: action.courseinfo[0],
              courseInfo: action.courseinfo[1],
            };

            const newAllCoursesInfo = [
              ...state.initialAllCoursesInfo,
              newCourse,
            ];
            draft.initialAllCoursesInfo = newAllCoursesInfo;

            draft.searchResultsAllCourses = newAllCoursesInfo;
            // alert('Course added successfuly');
          }
        }
        break;
      case 'ADD_MASTERCLASS':
        {
          const searchResults = state.masterclassInfo.filter(
            el =>
              el.masterclassTitle.toLowerCase() ===
              action.courseinfo[0].toLowerCase(),
          );
          if (searchResults.length !== 0) {
            // alert('Masterclass already added');
          } else {
            const newCourse = {
              id: state.masterclassInfo.length + 1,
              masterclassTitle: action.courseinfo[0],
              masterclassSpeaker: action.courseinfo[1],
              speakerProfession: action.courseinfo[2],
              speakerCollege: action.courseinfo[3],
            };

            const newMasterclassInfo = [...state.masterclassInfo, newCourse];
            draft.masterclassInfo = newMasterclassInfo;

            draft.searchResultsMasterClasses = newMasterclassInfo;
            // alert('Masterclass added successfuly');
          }
        }
        break;
      case 'PLAY_SELECTED_CLASS':
        draft.selectedClassInfo = action.selectedClass;

        break;
      case 'ADD_COMMENT':
        {
          const newComment = {
            initial: state.loggedinUserInitial,
            username: state.loggedinUsername,
            comment: action.newComment,
          };
          draft.selectedClassInfo.classComments = [
            ...draft.selectedClassInfo.classComments,
            newComment,
          ];
        }
        break;
      case 'LIKE_CLASS': {
        draft.selectedClassInfo.classLiked = true;
      }
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
