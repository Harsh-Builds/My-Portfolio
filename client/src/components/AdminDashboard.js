import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api'; // Your Axios instance
import '../AdminDashboard.css'; // Your existing CSS file

function AdminDashboard() {
  const navigate = useNavigate();

  // --- NEW STATE ---
  // We need to store the projects and the new project form data
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    imageUrl: '',
    liveLink: '',
    githubLink: ''
  });
  const [submitMessage, setSubmitMessage] = useState(''); // For success/error messages

  // --- EXISTING STATE ---
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // --- EXISTING LOGOUT FUNCTION (No changes) ---
  const handleLogout = useCallback(() => {
  localStorage.removeItem('admin_token');
  navigate('/admin');
}, [navigate]); // Add [navigate] as its dependency

  // --- UPDATED useEffect ---
  // This now fetches BOTH contacts AND projects when the page loads
  useEffect(() => {
    document.title = "Admin Dashboard";
    const token = localStorage.getItem('admin_token');

    if (!token) {
      handleLogout();
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        
        // 1. Get Contact Submissions (Private Route)
        const contactResponse = await api.get('/contact/data', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setContacts(contactResponse.data);

        // 2. Get All Projects (Public Route)
        // We can use the public route here, no token needed to just *see* projects
        const projectResponse = await api.get('/api/projects');
        setProjects(projectResponse.data);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Could not fetch data. Please try again.');
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate, handleLogout]); // navigate dependency is fine

  // --- NEW FUNCTION: Handle changes in the "Add Project" form ---
  const handleProjectFormChange = (e) => {
    const { name, value } = e.target;
    setNewProject(prevProject => ({
      ...prevProject,
      [name]: value
    }));
  };

  // --- NEW FUNCTION: Handle submitting the "Add Project" form ---
  const handleProjectSubmit = async (e) => {
    e.preventDefault(); // Stop the page from reloading
    setSubmitMessage(''); // Clear any old messages
    const token = localStorage.getItem('admin_token');

    try {
      // Call the PRIVATE POST route to add a new project
      const response = await api.post('/api/projects', newProject, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      // Add the new project to the *top* of our state list
      setProjects([response.data, ...projects]);
      setSubmitMessage('Project added successfully!');
      
      // Clear the form
      setNewProject({ title: '', description: '', imageUrl: '', liveLink: '', githubLink: '' });

    } catch (err) {
      console.error('Error adding project:', err);
      setSubmitMessage('Error adding project. Please try again.');
    }
  };

  // --- NEW FUNCTION: Handle deleting a project ---
  const handleProjectDelete = async (projectId) => {
    // Show a confirmation dialog
    if (!window.confirm('Are you sure you want to delete this project?')) {
      return;
    }

    const token = localStorage.getItem('admin_token');
    try {
      // Call the PRIVATE DELETE route
      await api.delete(`/api/projects/${projectId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      // Update the state by filtering out the deleted project
      setProjects(projects.filter(p => p._id !== projectId));

    } catch (err) {
      console.error('Error deleting project:', err);
      alert('Error deleting project.'); // Use alert for delete errors
    }
  };


  // --- RENDER LOGIC (No changes) ---
  if (loading) {
    return <div className="dashboard-loading">Loading dashboard...</div>;
  }
  if (error) {
    return <div className="dashboard-error">{error}</div>;
  }

  // --- UPDATED JSX ---
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      {/* --- NEW Project Manager Section --- */}
      <section className="project-manager">
        <h2>Manage Projects</h2>
        
        {/* --- Add Project Form --- */}
        <form onSubmit={handleProjectSubmit} className="project-form">
          <h3>Add New Project</h3>
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={newProject.title}
            onChange={handleProjectFormChange}
            required
          />
          <textarea
            name="description"
            placeholder="Project Description"
            value={newProject.description}
            onChange={handleProjectFormChange}
            required
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL (e.g., https://...)"
            value={newProject.imageUrl}
            onChange={handleProjectFormChange}
            required
          />
          <input
            type="text"
            name="liveLink"
            placeholder="Live Demo URL (e.g., https://...)"
            value={newProject.liveLink}
            onChange={handleProjectFormChange}
          />
          <input
            type="text"
            name="githubLink"
            placeholder="GitHub URL (e.g., https://...)"
            value={newProject.githubLink}
            onChange={handleProjectFormChange}
            required
          />
          <button type="submit" className="add-project-button">Add Project</button>
          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </form>

        {/* --- Manage Projects List --- */}
        <div className="project-list">
          <h3>Your Current Projects</h3>
          {projects.length === 0 ? (
            <p>No projects found. Add one above!</p>
          ) : (
            projects.map(project => (
              <div key={project._id} className="project-item">
                <span>{project.title}</span>
                <button 
                  onClick={() => handleProjectDelete(project._id)} 
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      {/* --- EXISTING Contact Submissions Section (No changes) --- */}
      <section className="contact-submissions">
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
              {contacts.map(contact => (
                <tr key={contact._id}> 
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>{new Date(contact.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

export default AdminDashboard;