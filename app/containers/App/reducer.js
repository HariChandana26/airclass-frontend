/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import competitiveCodingImg from '../../images/course-img.png';
// import webDevelopmentImg from '../../images/web-development.png';
import understanding5GImg from '../../images/understanding-5G.png';
import artificialInteligenceImg from '../../images/artificialInteligenceImg.png';
// import competitiveCodingImg from '../../images/competitiveCodingImg.png';
import frontendImg from '../../images/frontendImg.png';
import backendImg from '../../images/backendImg.png';
import virtualRealityImg from '../../images/virtualRealityImg.png';
import dataScienceImg from '../../images/dataScienceImg.png';
import axios from 'axios';
import { URL } from '../App/constants';

// import { combineReducers } from 'redux';
const detailedAllCourseInfo = [
  {
    id: 1,
    courseTitle: 'Competitive Coding',
    courseImage: backendImg,
    courseInfo:
      'Learn how to ace coding competitions and become a great programmer',
    isEnrolled: false,
    courseDescription:
      'Competitive Programming helps you become a great Programmer and crack coding interviews and competitons. In this program ,you will learn how to use advanced data structures to write highly efficient code. You’ll also master various problem-solving paradigms that help you to ace any coding competition',
    courseContents: [
      {
        id: 1,
        classTitle: 'Introduction to Competitive Programming',
        classDuration: '20min',
        classVideo: 'https://www.youtube.com/embed/pV6i3PucDMA',
        classNotes: [
          'Competitive Programming is a mental sport which enables you to code a given problem under provided constraints',
          'To jump in competitive programming you can follow an approach of project-based learning in which, once you know the syntax of the language and basic fundamentals, you can create multiple challenging projects and after making a lot of projects you will realize how logics work in development and that will help you to increase programming ability',
        ],
        classComments: [
          {
            initial: 'XY',
            username: 'XXXX YYYYYYYYY',
            comment: 'This video lecture is very good',
          },
        ],
        classLiked: false,
      },
      {
        id: 2,
        classTitle: 'Introduction to Algorithms',
        classDuration: '20min',
        classVideo: 'https://www.youtube.com/embed/rL8X2mlNHPM',
        classNotes: [
          'Algorithm should be clear and unambiguous. Each of its steps should be clear in all aspects and must lead to only one meaning.',
          'If an algorithm says to take inputs, it should be well-defined inputs.',
        ],
        classComments: [
          {
            initial: 'HS',
            username: 'Hari Chandana Sapare',
            comment: 'This video lecture on Algorithms is very good',
          },
        ],
        classLiked: false,
      },
      {
        id: 3,
        classTitle: 'Sorthing Algorithms',
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
  {
    id: 2,
    courseTitle: 'Data Science',
    courseImage: dataScienceImg,
    courseInfo:
      'Learn the art of uncovering insights and trends from Data with its application in various fields',
    isEnrolled: false,
    courseDescription:
      'Data science is a deep study of the massive amount of data, which involves extracting meaningful insights from raw, structured, and unstructured data that is processed using the scientific method, different technologies, and algorithms.It is a multidisciplinary field that uses tools and techniques to manipulate the....',
    courseContents: [
      {
        id: 1,
        classTitle: 'Introduction to Data Science',
        classDuration: '15min',
        classVideo: 'https://www.youtube.com/embed/X3paOmcrTjQ',
        classNotes: [
          'The Rest parameter should be the last parameter',
          'The Rest parameter should be the last parameter',
        ],
        classComments: [
          {
            initial: 'HS',
            username: 'Hari Chandana',
            comment: 'this video lecture is very good',
          },
        ],
        classLiked: false,
      },
      {
        id: 2,
        classTitle: 'Details of Data Science',
        classDuration: '20min',
        classVideo: 'https://www.youtube.com/embed/-ETQ97mXXF0',
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
        classTitle: 'Class and Objects',
        classDuration: '20min',
        classVideo: 'https://www.youtube.com/embed/6XWeeEg6d3s',
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
  {
    id: 3,
    courseTitle: 'Artificial Inteligence',
    courseImage: artificialInteligenceImg,
    courseInfo:
      'Build robust, scalable and secure backend APIs using the most sought after technologies in web development. Design and architect backends for data intensive and real time applications and deploy them on cloud.',
    isEnrolled: false,
    courseDescription:
      'Artificial Intelligence is a way of making a computer, a computer-controlled robot, or a software think intelligently, in the similar manner the intelligent humans think. AI is accomplished by studying how human brain thinks, and how humans learn, decide, and work while trying to solve a problem...',
    courseContents: [
      {
        id: 1,
        classTitle: 'Introduction to Artificial Inteligence',
        classDuration: '20min',
        classVideo: 'https://www.youtube.com/embed/JMUxmLyrhSk',
        classNotes: [
          'The Rest parameter should be the last parameter',
          'The Rest parameter should be the last parameter',
        ],
        classComments: [
          {
            initial: 'HS',
            username: 'Hari Chandana',
            comment: 'this video lecture is very good',
          },
        ],
        classLiked: false,
      },
      {
        id: 2,
        classTitle: 'Details of Artificial Inteligence',
        classDuration: '20min',
        classVideo: 'https://www.youtube.com/embed/PXwUEJVSAeA',
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
        classTitle: 'Artificial Inteligence Usecases',
        classDuration: '20min',
        classVideo: 'https://www.youtube.com/embed/PXwUEJVSAeA',
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
  {
    id: 4,
    courseTitle: 'Virual Reality',
    courseImage: virtualRealityImg,
    courseInfo:
      'Learn to create realistic augmented and virtual worlds by mastering C# scripting and advanced features in unity',
    isEnrolled: false,
    courseDescription:
      'Virtual Reality tricks one’s mind using computers that allow one to experience and more interestingly, interact with a 3D world. This is made possible by putting on a head-mounted display which sends a form of input tracking...',
    courseContents: [
      {
        id: 1,
        classTitle: 'Introduction to Virtual Reality',
        classDuration: '15min',
        classVideo: 'https://www.youtube.com/embed/vz0UUVDt2ps',
        classNotes: [
          'The Rest parameter should be the last parameter',
          'The Rest parameter should be the last parameter',
        ],
        classComments: [
          {
            initial: 'HS',
            username: 'Hari Chandana',
            comment: 'this video lecture is very good',
          },
        ],
        classLiked: false,
      },
      {
        id: 2,
        classTitle: 'Details of Virtual Reality',
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
        classTitle: 'Virtual Reality advancement',
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
  {
    id: 5,
    courseTitle: 'Frontend development',
    courseImage: frontendImg,
    courseInfo:
      'Design and build responsive web pages. Learn emerging frameworks to build accessible, scalable, and secure front-end applications. Build stateful, realtime cross-browser and cross-platform applications from scratch',
    isEnrolled: false,
    courseDescription:
      'Learn how to design and build responsive web pages. In this program, you’ll build accessible, scalable, and secure front-end applications using emerging frameworks. You’ll build cross-browser and cross-platform applications. You will...',
    courseContents: [
      {
        id: 1,
        classTitle: 'Introduction to Frontend Development',
        classDuration: '15min',
        classVideo: 'https://www.youtube.com/embed/l1EssrLxt7E',
        classNotes: [
          'The Rest parameter should be the last parameter',
          'The Rest parameter should be the last parameter',
        ],
        classComments: [
          {
            initial: 'HS',
            username: 'Hari Chandana',
            comment: 'this video lecture is very good',
          },
        ],
        classLiked: false,
      },
      {
        id: 2,
        classTitle: 'Details of Frontend development',
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
        classTitle: 'Frontend techstack',
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
  {
    id: 6,
    courseTitle: 'Backend development',
    courseImage: competitiveCodingImg,
    courseInfo:
      'Build robust, scalable and secure backend APIs using the most sought after technologies in web development. Design and architect backends for data intensive and real time applications and deploy them on cloud',
    isEnrolled: false,
    courseDescription:
      'In this track, you’ll build robust, scalable and secure backend APIs using the most sought after technologies in web development. You’ll learn to build highly reusable, maintainable and extensible applications. You’ll also architect the...',
    courseContents: [
      {
        id: 1,
        classTitle: 'Intorduction to Backend Development',
        classDuration: '15min',
        classVideo: 'https://www.youtube.com/embed/l1EssrLxt7E',
        classNotes: [
          'The Rest parameter should be the last parameter',
          'The Rest parameter should be the last parameter',
        ],
        classComments: [
          {
            initial: 'HS',
            username: 'Hari Chandana',
            comment: 'this video lecture is very good',
          },
        ],
        classLiked: false,
      },
      {
        id: 2,
        classTitle: 'Details of Backend development',
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
        classTitle: 'Backend techstack',
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
];
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
    masterclassImage:
      'https://res.cloudinary.com/due4dmz2b/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fd15dkfioxfhy94.cloudfront.net%2Ftenxiitian_prod%2Fprograms%2Fmaster-class%2Fpriyatham_bollimpalli%2Fvideo_thumb.png',
    masterclassTitle: 'Product Mindest',
    masterclassSpeaker: 'Priyatham Bollimpalli',
    speakerProfession: 'Micorsoft',
    speakerCollege: 'IIT Guwahati',
    classVideo: 'https://www.youtube.com/embed/EEBQUn313BA',
    classNotes: ['5G is the latest generation of mobile internet connectivity'],
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
    masterclassImage:
      'https://res.cloudinary.com/due4dmz2b/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fd1tgh8fmlzexmh.cloudfront.net%2Fotg_prod%2Fmedia%2Fmaster-classes%2FMasterclass_with_Hari_TN_2X.png',
    masterclassTitle: 'Coding',
    masterclassSpeaker: 'hari TN',
    speakerProfession: 'Co-Founder Bigbasket',
    speakerCollege: 'IIM CULCATTA',
    classVideo: 'https://www.youtube.com/embed/HIj8wU_rGIU',
    classNotes: ['5G is the latest generation of mobile internet connectivity'],
    classComments: [
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
  loggedinUserPurchased:[],
  loggedinUserMobileNumber: '1234567890',
  loggedinUserDateofBirth: '00/00/0000',
  loggedinUserOccupation: 'Student',
  initialAllCoursesInfo: detailedAllCourseInfo,
  initialEnrolledCourseInfo: [],

  masterclassInfo: detailedMasterClassInfo,
  searchResultsAllCourses: detailedAllCourseInfo,
  searchResultsEnrolledCourses: [],
  searchResultsMasterClasses: detailedMasterClassInfo,
  selectedCourseInfo: [
    {
        classTitle: "Introduction to Competitive Programming",
        classLiked: 0,
        classNotes: [],
        classComments: [],
        classVideo: "https://www.youtube.com/embed/pV6i3PucDMA",
        classDuration: "20min",
        _id: "61f1d8fe114c333330203b51",
        courseID: {
          description: "Competitive Programming helps you become a great Programmer and crack coding interviews and competitons. In this program you will learn Competitive Programming helps you become a great Programmer and crack coding interviews and competitons. In this program you will learn",
            courseContents: [],
          price: "1000",
            courseImage: "https://admiring-ritchie-224d41.netlify.app/81a3666bb7497f4bf6a67c189e4ba378.png",
            enrolledUsers: 1,
            watchHours: 50,
          _id: "61f1d8d3114c333330203b42",
            courseTitle: "Backend Development",
            courseInfo: "Build robust, scalable and secure backend APIs using the most sought after technologies in web development. Design and architect backends for data intensive and real time applications and deploy them on cloud.",
            timestamp: "2022-01-26T23:27:15.672Z",
            __v: 0
        },
        "timestamp": "2022-01-26T23:27:58.439Z",
        "__v": 0
    }],
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
};

const wholeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'ENROLL_COURSE':
        {
          // const enrolledcourseinfo = state.allCoursesInfo.filter(el => {
          //   console.log(el);
          //   {el._id === action.enrolledcourseid}
        
           
          // });

          // const newEnrolledCoursesInfo = [
          //   ...state.initialEnrolledCourseInfo,
          //   newEnrolledCourse,
          // ];
          //draft.initialAllCoursesInfo = newAllCoursesInfo;
          const getCourseInfo= async()=>{
            let response = await  axios({
            method: 'GET',
            url: `${URL}/v1/courses/courseSingle/${action.enrolledcourseid}`,
          })
          try{
              if (response.statusText === 'OK' && response.status === 200) {
                draft.initialEnrolledCourseInfo =[response.data.course]
              }
            }
            catch(error){
              console.log(error)
            };
          }
          
           draft.initialEnrolledCourseInfo =[...draft.initialEnrolledCourseInfo, action.enrolledcourse];
          // //draft.searchResultsAllCourses = newAllCoursesInfo;
           draft.searchResultsEnrolledCourses = [...draft.searchResultsEnrolledCourses, action.enrolledcourse];
           draft.loggedinUserPurchased=[...draft.loggedinUserPurchased,action.enrolledcourse._id]
        }
    
        break;

      case 'SEARCH_COURSE':
        {
          console.log("in search")
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
          // console.log(draft.allCoursesInfo)
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
        console.log("action.selectedClass")
        console.log(action.selectedClass)
        draft.selectedClassInfo = action.selectedClass;
        console.log("draft.selectedClassInfo")
        console.log(draft.selectedClassInfo)


        break;
      case 'PLAY_SELECTED_MASTERCLASS': 
        draft.selectedMasterclassInfo = action.selectedMasterclass;
      
      break;
      case 'UPDATE_SELECTED_COURSE':
        {
          // const filterCourse = detailedAllCourseInfo.filter(
          //   eachItem => eachItem.id === action.courseinfo.id,
          // );
          // const [courseinfo] = filterCourse;
          // const [coursecontents] = courseinfo.courseContents;
          console.log("action.courseinfo")
          console.log(action.courseinfo)
          draft.selectedCourseInfo = action.courseinfo;
          draft.selectedClassInfo = action.courseinfo[0];
          console.log("courses selected");
          console.log(draft.selectedCourseInfo);
          console.log("class selected");
          console.log(draft.selectedClassInfo);
        }
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
      case 'ADD_SOLUTION':
        {
          const newSolution = {
            id: state.selectedDiscussionSolutions.solutions.length + 1,
            discussionOwnerName: draft.loggedinUsername,
            discussionOwnerInitial: draft.loggedinUserInitial,
            discussionSolution: action.solutioninfo,
          };
          draft.selectedDiscussionSolutions.solutions = [
            ...draft.selectedDiscussionSolutions.solutions,
            newSolution,
          ];
        }
        break;
      case 'ADD_DISCUSSION':
        {
          const newDiscussion = {
            id: state.discussionList.length + 1,
            discussionTitle: action.discussioninfo[0],
            discussionInfo: action.discussioninfo[1],
            discussionOwnerName: draft.loggedinUsername,
            discussionOwnerInitial: draft.loggedinUserInitial,
          };
          draft.discussionList = [...draft.discussionList, newDiscussion];
        }
        break;
      case 'USER_LOGGEDIN':{
    
          draft.loggedinUsername = action.userinfo.name;
          draft.loggedinUserEmail = action.userinfo.email;
          draft.loggedinUserRole = action.userinfo.role;
          draft.loggedinUserId = action.userinfo.id;
          draft.loggedinUserInitial = action.userinfo.initialName;
          draft.loggedinUserPurchased=action.userinfo.purchasedCourse;
          draft.initialEnrolledCourseInfo=action.userinfo.purchasedCourse;
          draft.searchedEnrolledCourses=action.userinfo.purchasedCourse;
         
          }
        break;
      case 'FETCH_ALL_COURSES':
        
          draft.allCoursesInfo = action.coursesinfo;
          draft.initialAllCoursesInfo = action.coursesinfo;
           console.log(draft.allCoursesInfo)
           console.log(draft.loggedinUserPurchased)
          const enrolledCourses=draft.allCoursesInfo.filter(el=>{
            console.log(el)
            if( draft.loggedinUserPurchased.includes(el._id)){
            return el;
            }
           })
           
           draft.initialEnrolledCourseInfo=enrolledCourses;
           draft.searchResultsEnrolledCourses=enrolledCourses;
           console.log(draft.searchedEnrolledCourses)
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
