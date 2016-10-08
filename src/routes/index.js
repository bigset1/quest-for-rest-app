/* eslint-disable global-require */
import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import Home from '../components/Home';
import Profile from '../components/Profile';
import App from '../components/App';


export default (<Route path="/" component={App}>
  <IndexRoute component={Home}/>
  <Route path={"profile"} component={Profile}/>
</Route>)
