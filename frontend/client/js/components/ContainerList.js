import { connect } from 'react-redux';
import React, { PropTypes } from 'react';

import { startTimer, fetchEntries } from '../actions/creators.js';
import ReaggleList from './ReaggleList.js';

class ContainerList extends React.Component {
  componentDidMount() {
    this.props.fetchEntries();
  }

  render() {
    return (
      <ReaggleList entries={this.props.entries} onResume={this.props.onResume} />
    );
  }
}

ContainerList.propTypes = {
  entries: PropTypes.array.isRequired,
  onResume: PropTypes.func.isRequired,
  fetchEntries: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  entries: [
    ...state.entries,
  ],
});

const mapDispatchToProps = (dispatch) => ({
  onResume: (fromDate, newEntry) => {
    dispatch(startTimer(fromDate, newEntry));
  },
  fetchEntries: () => {
    dispatch(fetchEntries());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerList);
