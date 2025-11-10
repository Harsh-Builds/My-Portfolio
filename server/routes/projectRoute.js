const express = require('express');
const router = express.Router();
const Project = require('../models/project'); // Import our new Project model
const { jwtauthMiddleWare } = require('../jwt'); // Import your admin security

// --- PUBLIC ROUTE ---
// GET /api/projects
// This route is PUBLIC. Anyone can call it (your portfolio page).
router.get('/', async (req, res) => {
    try {
        // Find all projects and sort them (newest first)
        const projects = await Project.find().sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// --- PRIVATE ADMIN ROUTE ---
// POST /api/projects
// This route is PRIVATE. Only a logged-in admin can add a new project.
router.post('/', jwtauthMiddleWare, async (req, res) => {
    try {
        // jwtauthMiddleWare has run and verified the token.
        // We can check the user's role from the token payload.
        if (req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Forbidden: Only admins can add projects.' });
        }

        // Get the project data from the request body
        const data = req.body;
        const newProject = new Project(data);
        const response = await newProject.save();

        console.log('New project saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// --- PRIVATE ADMIN ROUTE ---
// DELETE /api/projects/:id
// This route is PRIVATE. Only a logged-in admin can delete a project.
router.delete('/:id', jwtauthMiddleWare, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Forbidden: Only admins can delete projects.' });
        }

        const projectId = req.params.id; // Get the project's ID from the URL
        
        const response = await Project.findByIdAndDelete(projectId);

        if (!response) {
            return res.status(404).json({ error: 'Project not found' });
        }

        console.log('Project deleted');
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;