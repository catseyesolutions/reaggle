import ActionTypes from './types.js';

export const startTimer = (fromDate, newEntry) => ({
  type: ActionTypes.START_TIMER,
  fromDate,
  newEntry,
});

export const stopTimer = (toDate, newId, newEntry) => ({
  type: ActionTypes.STOP_TIMER,
  toDate,
  newId,
  newEntry,
});

export const updateTimerForm = (data) => ({
  type: ActionTypes.UPDATE_TIMER_FORM,
  data,
});

export const tickTimer = (date) => ({
  type: ActionTypes.TICK_TIMER,
  date,
});
