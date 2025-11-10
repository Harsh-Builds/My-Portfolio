const mongoose = require('mongoose');

// This is the blueprint for each "Project" you want to save
const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        comment: 'This will be a URL to the project image'
    },
    liveLink: {
        type: String,
        comment: 'URL to the live demo (optional)'
    },
    githubLink: {
        type: String,
        required: true,
        comment: 'URL to the code on GitHub'
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

// Create the model from the blueprint
const Project = mongoose.model('Project', projectSchema);

// Export the model so other files can use it
module.exports = Project;