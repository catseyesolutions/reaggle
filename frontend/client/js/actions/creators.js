import ActionTypes from './types.js';


const updateTimerForm = (data) => ({
  type: ActionTypes.UPDATE_TIMER_FORM,
  data,
});

const tickTimer = (date) => ({
  type: ActionTypes.TICK_TIMER,
  date,
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
      dispatch(stopTimer(fromDate, Date.now(), state.timer));
    }
    dispatch(startTimerSync(fromDate, newEntry));

    // Send TICK actions to update the timer
    tickHandle = setInterval(() => {
      dispatch(tickTimer(Date.now()));
    }, 1000);
  }
);

export {
  startTimer,
  stopTimer,
  updateTimerForm,
};
