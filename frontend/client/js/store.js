import { createStore } from 'redux';
import reaggleApp from './reducers/index.js';

const store = createStore(reaggleApp);

export default store;
