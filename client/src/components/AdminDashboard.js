import React, { useEffect, useState } from 'react'; // 1. IMPORT useState
import { useNavigate } from 'react-router-dom';
import api from '../api'; // 2. IMPORT your api instance
import './AdminDashboard.css'; // 3. (Optional) Add a CSS file for styling

function AdminDashboard() {
  const navigate = useNavigate();

  // 4. ADD NEW STATE for loading, errors, and storing contacts
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // 5. This is your existing logout function (perfect, no changes)
  const handleLogout = () => {
    localStorage.removeItem('admin_token'); // Clear the token
    navigate('/admin'); // Go back to login
  };

  // 6. This useEffect hook now does BOTH protection AND data fetching
  useEffect(() => {
    // Set the page title
    document.title = "Admin Dashboard";

    // Define the async function to fetch data
    const fetchContactData = async () => {
      try {
        // Get the token from storage (this is your route protection)
        const token = localStorage.getItem('admin_token');
        if (!token) {
          handleLogout(); // Log out if no token
          return;
        }

        // Call your new protected backend endpoint
        const response = await api.get('/contact/data', {
          headers: {
            'Authorization': `Bearer ${token}` // Send the token for auth!
          }
        });

        // Save the data in state
        setContacts(response.data);
        setLoading(false);

      } catch (err) {
        console.error('Error fetching data:', err);
        // If the token is invalid or forbidden, log out
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          setError('Your session has expired. Please log in again.');
          handleLogout();
        } else {
          setError('Could not fetch data. Please try again later.');
          setLoading(false);
        }
      }
    };

    // Call the function
    fetchContactData();
    
  }, [navigate]); // The dependency array is correct

  
  // 7. --- NEW RENDER LOGIC ---
  // Show a loading message
  if (loading) {
    return <div className="dashboard-loading">Loading dashboard...</div>;
  }

  // Show an error message
  if (error) {
    return <div className="dashboard-error">{error}</div>;
  }

  // 8. --- NEW JSX ---
  // Show the dashboard with the data table
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>
      
      <h3>Contact Form Submissions</h3>
      
      {contacts.length === 0 ? (
        <p>No contact messages found.</p>
      ) : (
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Received</th>
            </tr>
          </thead>
          <tbody>
            {/* Loop over the contacts and create a row for each one */}
            {contacts.map(contact => (
              <tr key={contact._id}> 
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
                {/* Format the date to be more readable */}
                <td>{new Date(contact.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminDashboard;