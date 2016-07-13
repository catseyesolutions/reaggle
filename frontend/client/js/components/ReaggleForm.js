import React, { PropTypes } from 'react';


class ReaggleForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.fromDate) {
      this.props.onStop(Date.now(), this.props);
    } else {
      this.props.onStart(Date.now());
    }
  }

  render() {
    let seconds = this.props.elapsed / 1000;
    return (
      <div className="reaggle-form">
        <input
          type="text"
          placeholder="insert project"
          value={this.props.project}
          onChange={this.props.onProjectChange}
        />
        <input
          type="text"
          placeholder="insert description"
          value={this.props.description}
          onChange={this.props.onDescriptionChange}
        />
        <input
          type="checkbox"
          checked={this.props.billable}
          onChange={this.props.onBillableChange}
        />
        <div className="reaggle-form-duration">
          <p>{seconds}</p>
        </div>
        <button onClick={this.handleClick}>
          {this.props.fromDate ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

ReaggleForm.propTypes = {
  project: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  billable: PropTypes.bool.isRequired,
  fromDate: PropTypes.number,
  elapsed: PropTypes.number,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onProjectChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onBillableChange: PropTypes.func.isRequired,
};

export default ReaggleForm;
