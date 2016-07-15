import fetch from 'isomorphic-fetch';
import ActionTypes from './types.js';


const updateTimerForm = (data) => ({
  type: ActionTypes.UPDATE_TIMER_FORM,
  data,
});

const tickTimer = () => ({
  type: ActionTypes.TICK_TIMER,
  now: Date.now(),
});


const startTimerSync = (fromDate, newEntry) => ({
  type: ActionTypes.START_TIMER,
  fromDate,
  newEntry,
});

// module level variable to store the handle of the setInterval
// so that we can call clearInterval before a STOP_TIMER action
// is dispatched
let tickHandle = null;

const stopTimer = (toDate, newId, newEntry) => {
  // stop the tick action
  clearInterval(tickHandle);
  return {
    type: ActionTypes.STOP_TIMER,
    toDate,
    newId,
    newEntry,
  };
};

const startTimer = (fromDate, newEntry) => (
  (dispatch, getState) => {
    const state = getState();

    // we check if timer is running before starting the timer.
    // if this is true we dispatch a STOP_TIMER action
    // to save the current timer entry.
    if (state.timer.fromDate) {
      const newId = Date.now();
      dispatch(stopTimer(fromDate, newId, state.timer));
    }
    dispatch(startTimerSync(fromDate, newEntry));

    // Send TICK actions to update the timer
    tickHandle = setInterval(() => {
      dispatch(tickTimer());
    }, 1000);
  }
);

/**
 * API actions
 */
const requestEntries = () => ({
  type: ActionTypes.REQUEST_ENTRIES,
});

const receiveEntries = (entries) => ({
  type: ActionTypes.RECEIVE_ENTRIES,
  entries,
});

const fetchEntries = () => (

  (dispatch) => {
    // first thing is tell the UI that we are starting
    // to fetch new entries.
    dispatch(requestEntries());

    // make the request and on success dispatch the results
    // to the UI
    const apiRoot = 'https://reaggle.herokuapp.com/api/entries/';
    return fetch(apiRoot)
      .then(response => response.json())
      .then(json => {
        // here we need to map the date fields
        // to the proper key: to_date => toDate
        const entries = json.map(entry =>
          Object.assign({}, entry, {
            fromDate: entry.from_date,
            toDate: entry.to_date,
          })
        );
        dispatch(receiveEntries(entries));
      });
  }
);

export {
  startTimer,
  stopTimer,
  updateTimerForm,
  fetchEntries,
};
