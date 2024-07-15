import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css'; // Ensure this file exists

const Register = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    // Add registration logic here
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <input type="tel" value={phone} placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="form-group">
            <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <input type="password" value={password} placeholder='Password' onChange={handlePasswordChange} required />
          </div>
          <div className="form-group">
            <input type="password" value={confirmPassword} placeholder='Confirm Password' onChange={handleConfirmPasswordChange} required />
          </div>
          {passwordError && <p className="error">{passwordError}</p>}
          <button type="submit" className="button button-green">Register</button>
        </form>
        <Link to="/login">Back to Login</Link>
      </div>
    </div>
  );
};

export default Register;
