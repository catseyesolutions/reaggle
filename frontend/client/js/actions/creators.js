import ActionTypes from './types.js';

export const startTimer = (fromDate) => ({
  type: ActionTypes.START_TIMER,
  fromDate,
});

export const stopTimer = (toDate) => ({
  type: ActionTypes.STOP_TIMER,
  toDate,
});
