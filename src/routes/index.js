/* eslint-disable global-require */

import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import Home from '../components/Home';
import Profile from '../components/Profile';
import App from '../components/App';


export default <Router>
  <Route component={App}>
    <IndexRoute component={Home}/>
    <Route path={"/profile"} component={Profile}/>
  </Route>
</Router>
/*


// The top-level (parent) route
export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./home').default,
    require('./contact').default,
    require('./login').default,
    require('./register').default,
    require('./admin').default,

    // place new routes before...
    require('./content').default,
    require('./notFound').default,
  ],

  async action({next}) {
    let route;

    // Execute each child route until one of them return the result
    // TODO: move this logic to the `next` function
    do {
      route = await next();
    } while (!route);

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - www.reactstarterkit.com`;
    route.description = route.description || '';

    return route;
  },

};
*/
