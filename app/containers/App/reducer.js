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

// The initial state of the App
export const initialState = {
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

      case 'SEARCH_COURSE': {
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
        const searchedMasterClassess = state.masterclassInfo.filter(eachItem =>
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
