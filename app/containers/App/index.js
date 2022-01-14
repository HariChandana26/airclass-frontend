/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

// import HomePage from 'containers/HomePage';
import HomepageMentor from 'containers/HomepageMentor';
import LoginPage from 'containers/LoginPage';
import SignupPage from 'containers/SignupPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import CoursePage from 'containers/CoursePage';
import configureStore from '../../configureStore';

export default function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={LoginPage} exact />
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/homepage" component={HomepageMentor} />
            <Route path="/coursepage" component={CoursePage} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
