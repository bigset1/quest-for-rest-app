/* eslint-disable global-require */
import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import Home from '../components/Home';
import Profile from '../components/Profile';
import CreateQuest from '../components/CreateQuest';
import App from '../components/App';
import Login from '../components/Auth/Login';
import Redirect from '../components/Auth/Redirect';

export default (<Route path="/" component={App}>
  <IndexRoute component={Home}/>
  <Route path={"auth"}>
    <Route path={"login"} component={Login}/>
    <Route path={"redirect"} component={Redirect} />
  </Route>
  <Route path={"profile"} component={Profile}/>
  <Route path={"create-quest"} component={CreateQuest}/>
</Route>)
