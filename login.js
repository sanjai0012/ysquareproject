import React, { useState } from 'react';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }
    setIsLoggedIn(true);
  };

  return (
    
    <div className="login-container d-flex justify-content-center">
      {isLoggedIn ? (
        <div className="welcome-message">Welcome, {email}!</div>
      ) : (
        <div>
          <h2>Login</h2>
          <div className="error-message text-danger">{error}</div>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='btn btn-primary' onClick={handleLogin}>Log in</button>
        </div>
      )}
    </div>
  );
}

export default Login;
