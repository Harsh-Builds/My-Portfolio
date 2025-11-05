// src/components/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react'; // No longer needed here
import '../AdminLogin.css'; 
import api from '../api'; // <-- ADD THIS


function AdminLogin({ onLoginSuccess }) {
  // 1. Add state for email, password, and any login errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To show login errors
  
  const navigate = useNavigate();

  // 2. Create a function to handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setError(''); 

    try {
      // 3. Send the email and password to your backend
      const response = await api.post('/admin', { 
        email: email, 
        password: password 
      });

      // 4. Handle a successful login
      // Your backend sends { token } on success
      if (response.data.token) {
        
        // 5. IMPORTANT: Save the token in localStorage to stay logged in
        localStorage.setItem('admin_token', response.data.token); 

        onLoginSuccess(); // Tell the parent component (App.js?)
        navigate('/admin/dashboard'); 
      } else {
        // This is a fallback in case the backend sends a 200 OK but no token
        setError('Login failed. Please try again.');
      }

    } catch (err) {
      // 5. Handle login failures (401) or server errors (500)
      console.error('Login error:', err);
      
      // Check if the error response has the data we expect
      if (err.response && err.response.data && err.response.data.error) {
        // This will grab "Invalid credentials" or "Server error" from your backend
        setError(err.response.data.error);
      } else {
        // Generic fallback error
        setError('An error occurred. Please try again.');
      }
    }
  };
 

  return (
    <div className="login-container">
      {/* 6. Hook up the handleSubmit function to the form */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Admin Panel Login</h2>
        
        {/* 8. Display any errors to the user */}
        {error && <p className="login-error">{error}</p>}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email} // 7. Connect input to state
            onChange={(e) => setEmail(e.target.value)} // 7. Update state on change
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password} // 7. Connect input to state
            onChange={(e) => setPassword(e.target.value)} // 7. Update state on change
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
 };
export default AdminLogin;