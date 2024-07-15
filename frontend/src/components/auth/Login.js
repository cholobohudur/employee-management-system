import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <div className="container">
      <h2 className="welcome">Welcome to Cholo Bohudur Team</h2>
      <div className="form-container">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="email" value={email} placeholder='Enter Your Email' onChange={handleEmailChange} required />
          </div>
          <div className="form-group">
            <input type="password" value={password} placeholder='Enter Your Password' onChange={handlePasswordChange} required />
          </div>
          <button type="submit" className="button button-green">Login</button>
        </form>
        <br></br>
        <Link to="/register">Register Here</Link>
      </div>
    </div>
  );
};

export default Login;
