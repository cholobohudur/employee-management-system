import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import WorkHours from './components/workhours/WorkHours';
import WorkReport from './components/reports/WorkReport';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workhours" element={<WorkHours />} />
          <Route path="/workreport" element={<WorkReport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
