import React, { PropTypes } from 'react';


class ReaggleForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.fromDate) {
      this.props.onStop(Date.now());
    } else {
      this.props.onStart(Date.now());
    }
  }

  render() {
    return (
      <div className="reaggle-form">
        <input type="text" placeholder="insert project" value={this.props.project} />
        <input type="text" placeholder="insert description" value={this.props.description} />
        <input type="checkbox" checked={this.props.billable} />
        <div className="reaggle-form-duration">
          <p>00:00</p>
        </div>
        <button onClick={this.handleClick}>Start</button>
      </div>
    );
  }
}

ReaggleForm.propTypes = {
  project: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  billable: PropTypes.bool.isRequired,
  fromDate: PropTypes.string,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
};

export default ReaggleForm;
