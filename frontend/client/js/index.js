import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Reaggle from './components/Reaggle.js';
import store from './store.js';

import '../sass/main.scss';

const root = document.querySelector('.container');

ReactDOM.render(
  <Provider store={store} key="provider">
    <Reaggle />
  </Provider>,
  root
);
