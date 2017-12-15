import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import { apiMiddleware } from './middleware';
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
        apiMiddleware,
        thunk,
        historyMiddleware,
      ),
      devTools,
    ),
  );

  return store;
};
