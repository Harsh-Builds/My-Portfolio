import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * A protected route component.
 *
 * @param {object} props
 * @param {boolean} props.isLoggedIn - Whether the user is logged in (from App.js state).
 * @param {React.ReactNode} props.children - The component to render if logged in (e.g., <AdminDashboard />).
 */
function ProtectedRoute({ isLoggedIn, children }) {
  
  // If the user is not logged in, redirect them to the /admin login page.
  if (!isLoggedIn) {
    // 'replace' prevents the user from clicking "back" to the dashboard.
    return <Navigate to="/admin" replace />;
  }

  // If the user is logged in, render the child component (the dashboard).
  return children;
}

export default ProtectedRoute;
