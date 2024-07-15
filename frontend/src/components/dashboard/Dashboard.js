import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles.css'; // Ensure this file exists
import Timer from './Timer'; // Create and import Timer component

const Dashboard = () => {
  const [working, setWorking] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [report, setReport] = useState('');
  const navigate = useNavigate();

  const startWork = () => {
    setWorking(true);
    // Start your timer logic
  };

  const stopWork = () => {
    setWorking(false);
    setShowPopup(true);
    // Stop your timer logic
  };

  const handleReportChange = (e) => {
    setReport(e.target.value);
  };

  const handleSubmit = () => {
    if (!report.trim()) {
      alert('Please enter your daily work report.');
      return;
    }
    // Handle submission to backend
    setShowPopup(false);
    setReport('');
  };

  const handleLater = () => {
    setShowPopup(false);
    setReport('');
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h2 className="dashboard-heading">{working ? 'Stop Your Work' : 'Start Your Work'}</h2>
      <button className={`button ${working ? 'button-red' : 'button-green'}`} onClick={working ? stopWork : startWork}>
        {working ? 'STOP' : 'START'}
      </button>

      {showPopup && (
        <div className="form-container">
          <h3>Daily Work Report</h3>
          <textarea rows="4" value={report} onChange={handleReportChange} placeholder="Enter your daily work report"></textarea>
          <br />
          <button className="button button-green" onClick={handleSubmit}>SUBMIT</button>
          <button className="button button-gray" onClick={handleLater}>LATER</button>
        </div>
      )}

      <Timer working={working} />
    </div>
  );
};

export default Dashboard;
