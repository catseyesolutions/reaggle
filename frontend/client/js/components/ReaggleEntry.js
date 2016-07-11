import React, { PropTypes } from 'react';

const ReaggleEntry = ({ project, description, billable, onResume }) => (
  <div className="reaggle-entry">
    <div className="reaggle-entry-project">
      <h2>{project}</h2>
    </div>
    <div className="reaggle-entry-description">
      <p>{description}</p>
    </div>
    <div className="reaggle-entry-billable">
      {billable}
    </div>
    <div className="reaggle-entry-duration">
      <p>00:00</p>
    </div>
    <div className="reaggle-entry-resume">
      <button onClick={onResume}>Resume</button>
    </div>
  </div>
);

ReaggleEntry.propTypes = {
  project: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  billable: PropTypes.bool.isRequired,
  onResume: PropTypes.func.isRequired,
};

export default ReaggleEntry;
