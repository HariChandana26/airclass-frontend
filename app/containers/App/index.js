/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

import HomePage from 'containers/HomePage';
import HomepageMentor from 'containers/HomepageMentor';
import LoginPage from 'containers/LoginPage';
import SignupPage from 'containers/SignupPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import CoursePage from 'containers/CoursePage';
import MasterclassPage from 'containers/MasterclassPage';
import ProfilePage from 'containers/ProfilePage';
import DiscussionForum from 'containers/DiscussionForum';
import DiscussionSolutionsPage from 'containers/DiscussionSolutionsPage';
import configureStore from '../../configureStore';

export default function App() {
  const store = configureStore();
  const initialState = useSelector(state => state);
  const { global } = initialState;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route
            exact
            path={
              global.loggedinUserRole === 'user'
                ? '/homepage'
                : '/homepagementor'
            }
            component={
              global.loggedinUserRole === 'user' ? HomePage : HomepageMentor
            }
          />
          <Route path="/coursepage" component={CoursePage} />
          <Route path="/masterclasspage" component={MasterclassPage} />
          <Route path="/profilepage" component={ProfilePage} />
          <Route path="/discussionforum" component={DiscussionForum} />
          <Route
            path="/discussionsolutions"
            component={DiscussionSolutionsPage}
          />
        </Switch>

        {/* <div> 
          <Switch>
            <Route path="/" component={LoginPage} exact />
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/coursepage" component={CoursePage} />
            <Route path="/masterclasspage" component={MasterclassPage} />
            <Route path="/profilepage" component={ProfilePage} />
            <Route component={Error} />
          </Switch>
        </div> */}
      </BrowserRouter>
    </Provider>
  );
}
