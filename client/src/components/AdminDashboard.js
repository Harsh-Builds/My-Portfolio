import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

  // This is the "route protection" we talked about
  useEffect(() => {
    // 1. Get the token from storage
    const token = localStorage.getItem('admin_token');
    
    // 2. If there's no token, redirect to the login page
    if (!token) {
      navigate('/admin'); // Or wherever your login page is
    }
  }, [navigate]); // This effect runs when the component loads

  // A simple function to log out
  const handleLogout = () => {
    localStorage.removeItem('admin_token'); // Clear the token
    navigate('/admin'); // Go back to login
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome, admin! You are logged in.</p>
      {/* Add your admin tables, charts, etc. here */}
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;