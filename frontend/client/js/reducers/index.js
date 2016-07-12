import { combineReducers } from 'redux';
import ActionTypes from '../actions/types.js';

/**
  {
  timer: {
  },
  entries: [
  ]
  }
  */

const initialTimerState = {
  project: '',
  description: '',
  billable: false,
  fromDate: null,
  elapsed: 0,
};

/** Timer reducer handles
*/
const timer = (state = initialTimerState, action) => {
  switch (action.type) {

    // the START_TIMER action set the
    // fromDate and returns the new state
    case ActionTypes.START_TIMER:
      return Object.assign({}, state, {
        fromDate: action.fromDate,
      }, action.newEntry);

    case ActionTypes.STOP_TIMER:
      // clean the form fields
      return Object.assign({}, initialTimerState);

    case ActionTypes.UPDATE_TIMER_FORM:
      return Object.assign({}, state, action.data);

    case ActionTypes.TICK_TIMER:
      return Object.assign({}, state, {
        elapsed: action.date - state.fromDate,
      });

    default:
      return state;
  }
};


/** Reducer for the entries list.
*/
const entries = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.STOP_TIMER:
      return [
        Object.assign({}, action.newEntry, {
          id: action.newId,
          toDate: action.toDate,
        }),
        ...state,
      ];
    default:
      return state;
  }
};

const reaggleApp = combineReducers({
  timer,
  entries,
});

export default reaggleApp;
