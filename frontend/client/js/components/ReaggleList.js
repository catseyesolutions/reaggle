import React, { PropTypes } from 'react';
import ReaggleEntry from './ReaggleEntry.js';

const ReaggleList = ({ entries, onResume }) => (
  <div className="reaggle-list">
    {entries.map(entry =>
      <ReaggleEntry
        key={entry.id}
        {...entry}
        onResume={() => onResume(entry.id)}
      />
    )}
  </div>
);

ReaggleList.propTypes = {
  entries: PropTypes.array.isRequired,
  onResume: PropTypes.func.isRequired,
};

export default ReaggleList;
