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
  initialallcoursesinfo: [
    {
      id: 1,
      courseTitle: 'Artificial inteligence',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer',
      isenrolled: false,
    },
    {
      id: 2,
      courseTitle: 'Web development',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer',
      isenrolled: false,
    },
    {
      id: 3,
      courseTitle: 'Machine learning',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer Learn how to ace coding competitions and become a great programmer',
      isenrolled: false,
    },
  ],
  initialenrolledcourseinfo: [
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

  masterclassinfo: [
    {
      id: 1,
      'masterclass-title': 'Understanding 5G',
      'masterclass-speaker': 'Rakesh Mishra',
      'speaker-profession': 'Co-Founder Uhana',
      'speaker-college': 'IIT Madras',
    },
    {
      id: 2,
      'masterclass-title': 'Product Mindest',
      'masterclass-speaker': 'Rakesh Mishra',
      'speaker-profession': 'Co-Founder Uhana',
      'speaker-college': 'IIT Madras',
    },
    {
      id: 3,
      'masterclass-title': 'Coding',
      'masterclass-speaker': 'Rakesh Mishra',
      'speaker-profession': 'Co-Founder Uhana',
      'speaker-college': 'IIT Madras',
    },
  ],
  searchResultsallcourses: [
    {
      id: 1,
      courseTitle: 'Artificial inteligence',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer',
      isenrolled: false,
    },
    {
      id: 2,
      courseTitle: 'Web development',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer',
      isenrolled: false,
    },
    {
      id: 3,
      courseTitle: 'Machine learning',
      courseInfo:
        'Learn how to ace coding competitions and become a great programmer Learn how to ace coding competitions and become a great programmer',
      isenrolled: false,
    },
  ],
  searchResultsenrolledCourses: [
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
      'masterclass-title': 'Understanding 5G',
      'masterclass-speaker': 'Rakesh Mishra',
      'speaker-profession': 'Co-Founder Uhana',
      'speaker-college': 'IIT Madras',
    },
    {
      id: 2,
      'masterclass-title': 'Product Mindest',
      'masterclass-speaker': 'Rakesh Mishra',
      'speaker-profession': 'Co-Founder Uhana',
      'speaker-college': 'IIT Madras',
    },
    {
      id: 3,
      'masterclass-title': 'Coding',
      'masterclass-speaker': 'Rakesh Mishra',
      'speaker-profession': 'Co-Founder Uhana',
      'speaker-college': 'IIT Madras',
    },
  ],
};

/* eslint-disable default-case, no-param-reassign */
/*
const appReducer = (state = initialState.initialallcoursesinfo, action) =>
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
  state = initialState.initialenrolledcourseinfo,
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
const masterclassReducer = (state = initialState.masterclassinfo, action) =>
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
          const a = state.initialallcoursesinfo.map(el => {
            if (el.id === action.courseinfo.id) {
              return { ...el, isenrolled: true };
            }
            return el;
          });
          const newcourse = {
            id: state.initialenrolledcourseinfo.length + 1,
            courseTitle: action.courseinfo.courseTitle,
            courseInfo: action.courseinfo.courseInfo,
          };

          const b = [...state.initialenrolledcourseinfo, newcourse];
          draft.initialallcoursesinfo = a;
          draft.initialenrolledcourseinfo = b;
          draft.searchResultsallcourses = a;
          draft.searchResultsenrolledCourses = b;
        }
        break;

      case 'SEARCH_COURSE': {
        const searchedallCourses = state.initialallcoursesinfo.filter(
          eachItem =>
            eachItem.courseTitle
              .toLowerCase()
              .includes(action.searchinfo.toLowerCase()),
        );
        const searchedenrolledCourses = state.initialenrolledcourseinfo.filter(
          eachItem =>
            eachItem.courseTitle
              .toLowerCase()
              .includes(action.searchinfo.toLowerCase()),
        );
        const searchedmasterClassess = state.masterclassinfo.filter(eachItem =>
          eachItem['masterclass-title']
            .toLowerCase()
            .includes(action.searchinfo.toLowerCase()),
        );
        /*
        return {
          ...state,
          searchResultsallcourses: searchedallCourses,
          searchResultsenrolledCourses: searchedenrolledCourses,
        };
        */
        draft.searchResultsallcourses = searchedallCourses;
        draft.searchResultsenrolledCourses = searchedenrolledCourses;
        draft.searchResultsMasterClasses = searchedmasterClassess;
      }
    }
  });
/*
const reducers = combineReducers({
  initialallcoursesinfo: appReducer,
  initialenrolledcourseinfo: enrolledReducer,
  masterclassinfo: masterclassReducer,
});
*/
export default wholeReducer;
