/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import Router from 'react-router/lib/Router';
import routes from './routes';
import browserHistory  from 'react-router/lib/browserHistory';
injectTapEventPlugin();
// Make taps on links and buttons work fast on mobiles
FastClick.attach(document.body);

const container = document.getElementById('app');

try {
  ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, container);
  //ReactDOM.render(<div>test app</div>, container);
} catch (err) {
  if (process.env.NODE_ENV !== 'production') {
    throw err;
  }

  // Avoid broken navigation in production mode by a full page reload on error
  console.error(err); // eslint-disable-line no-console
  window.location.reload();
}
