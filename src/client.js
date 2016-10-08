/** global VK */
import 'babel-polyfill';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import Router from 'react-router/lib/Router';
import routes from './routes';
import browserHistory  from 'react-router/lib/browserHistory';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import questsApp from './core/reducers';
injectTapEventPlugin();
// Make taps on links and buttons work fast on mobiles
FastClick.attach(document.body);

const container = document.getElementById('app');
let store = createStore(questsApp, applyMiddleware(thunk));

try {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>{routes}</Router>
    </Provider>, container);
  //ReactDOM.render(<div>test app</div>, container);
} catch (err) {
  if (process.env.NODE_ENV !== 'production') {
    throw err;
  }

  // Avoid broken navigation in production mode by a full page reload on error
  console.error(err); // eslint-disable-line no-console
  window.location.reload();
}
