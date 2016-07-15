import { connect } from 'react-redux';
import { startTimer, stopTimer, updateTimerForm } from '../actions/creators.js';

import ReaggleForm from './ReaggleForm.js';

const mapStateToProps = (state) => (
  Object.assign({}, state.timer)
);

const mapDispatchToProps = (dispatch) => ({
  onStart: (fromDate) => {
    dispatch(startTimer(fromDate));
  },
  onStop: (toDate, newEntry) => {
    // attach a new id to the entry
    const newId = Date.now();
    dispatch(stopTimer(toDate, newId, newEntry));
  },
  onProjectChange: (e) => {
    dispatch(updateTimerForm({ project: e.target.value }));
  },
  onDescriptionChange: (e) => {
    dispatch(updateTimerForm({ description: e.target.value }));
  },
  onBillableChange: (e) => {
    dispatch(updateTimerForm({ billable: e.target.checked }));
  },
});

const ContainerForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReaggleForm);

export default ContainerForm;
