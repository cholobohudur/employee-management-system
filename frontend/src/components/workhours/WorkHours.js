import React from 'react';
import '../../styles.css'; // Ensure this file exists

const WorkHours = () => {
  return (
    <div className="container">
      <h2>Work Hour Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Start Time</th>
            <th>Stop Time</th>
            <th>Total Hours</th>
          </tr>
        </thead>
        <tbody>
          {/* Display work hour details */}
        </tbody>
      </table>
    </div>
  );
};

export default WorkHours;
