import { connect } from 'react-redux';

import { startTimer } from '../actions/creators.js';
import ReaggleList from './ReaggleList.js';

const mapStateToProps = (state) => ({
  entries: [
    ...state.entries,
  ],
});

const mapDispatchToProps = (dispatch) => ({
  onResume: (fromDate, newEntry) => {
    dispatch(startTimer(fromDate, newEntry));
  },
});

const ContainerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReaggleList);

export default ContainerList;
