import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const historyMiddleware = routerMiddleware(browserHistory);

const devTools =
    window.devToolsExtension
      ? window.devToolsExtension()
      : f => f;

export default () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunk,
        historyMiddleware,
      ),
      devTools,
    ),
  );
  console.log('devTools', devTools);
  console.log('window', window);
  return store;
};
