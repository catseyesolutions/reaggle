import React, { PropTypes } from 'react';

class ReaggleEntry extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newEntry = {
      project: this.props.project,
      description: this.props.description,
      billable: this.props.billable,
    };
    this.props.onResume(Date.now(), newEntry);
  }

  render() {
    const elapsed = (this.props.toDate - this.props.fromDate) / 1000;
    return (
      <div className="reaggle-entry">
        <div className="reaggle-entry-project">
          <h2>{this.props.project}</h2>
        </div>
        <div className="reaggle-entry-description">
          <p>{this.props.description}</p>
        </div>
        <div className="reaggle-entry-billable">
          {this.props.billable ? '$' : ''}
        </div>
        <div className="reaggle-entry-duration">
          <p>{elapsed}</p>
        </div>
        <div className="reaggle-entry-resume">
          <button onClick={this.handleClick}>Resume</button>
        </div>
      </div>
    );
  }
}

ReaggleEntry.propTypes = {
  project: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  billable: PropTypes.bool.isRequired,
  fromDate: PropTypes.number.isRequired,
  toDate: PropTypes.number.isRequired,
  onResume: PropTypes.func.isRequired,
};

export default ReaggleEntry;
