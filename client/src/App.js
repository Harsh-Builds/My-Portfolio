// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your one main portfolio page
import PortfolioPage from './components/PortfolioPage'; 

// Import your admin components
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

// This is your main CSS file
import "./portfolio.css"; 

function App() {
  // State to track if admin is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to pass to AdminLogin component
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        
        {/* Route 1: Your main portfolio page */}
        <Route 
          path="/" 
          element={<PortfolioPage />} 
        />

        {/* Route 2: The admin login page */}
        <Route 
          path="/admin" 
          element={<AdminLogin onLoginSuccess={handleLogin} />} 
        />

        {/* Route 3: The PROTECTED admin dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;