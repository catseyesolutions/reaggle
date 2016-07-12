import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Reaggle from './components/Reaggle.js';
import store from './store.js';

import '../sass/main.scss';

const root = document.querySelector('.container');

ReactDOM.render(
  <Provider store={store} key="provider">
    <Reaggle
      apiRoot="https://reaggle.herokuapp.com/api/entries/"
      interval="2000"
    />
  </Provider>,
  root
);
