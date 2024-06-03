import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      const { token } = response.data;

      // Store the token in localStorage or use it for authentication
      localStorage.setItem('token', token);

      // Redirect to the desired page or perform other actions
      console.log('Login successful');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <div class="row justify-content-center mt-5">{error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
        {error}
        <button
          type="button"
          onClick={() => setError(false)}
          className="close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>}</div>
      <div class="row justify-content-center mt-5">

        <div class="col-md-6">
          <div class="login-form">
            <h3 class="text-center mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter username" value={username}
                  onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password" value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="rememberMe" />
                <label class="form-check-label" for="rememberMe">Remember me</label>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Login</button>
            </form>
            <div class="text-center mt-3">
              <a href="#" class="text-decoration-none">Change Password</a>
              <span class="mx-2">|</span>
              <a href="#" class="text-decoration-none">Forgot Password</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;