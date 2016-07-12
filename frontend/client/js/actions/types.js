/**
 * Action types module.
 * @module actions/types.js
 */

/** The timer should start tracking */
const START_TIMER = 'START_TIMER';

/** The timer should stop tracking */
const STOP_TIMER = 'STOP_TIMER';

/** Update the elapsed time of the timer */
const TICK_TIMER = 'TICK_TIMER';

/** Update the form of the timer */
const UPDATE_TIMER_FORM = 'UPDATE_TIMER_FORM';

export default {
  START_TIMER,
  STOP_TIMER,
  TICK_TIMER,
  UPDATE_TIMER_FORM,
};
