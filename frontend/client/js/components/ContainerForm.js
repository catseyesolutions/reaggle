import { connect } from 'react-redux';
import { startTimer, stopTimer } from '../actions/creators.js';

import ReaggleForm from './ReaggleForm.js';

const mapStateToProps = (state) => (
  Object.assign({}, state.timer)
);

const mapDispatchToProps = (dispatch) => ({
  onStart: (fromDate) => {
    dispatch(startTimer(fromDate));
  },
  onStop: (toDate) => {
    dispatch(stopTimer(toDate));
  },
});

const ContainerForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReaggleForm);

export default ContainerForm;
