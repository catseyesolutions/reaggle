import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reaggleApp from './reducers/index.js';

const loggerMiddleware = createLogger();
const store = createStore(
  reaggleApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

export default store;
