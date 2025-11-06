const express = require('express');  
const router = express.Router();

const person = require('../models/person'); // import our person model.
const { jwtauthMiddleWare } = require('../jwt');

// POST method route to add a person:-

router.post('/', async (req, res) => {

  try {
    
    const dataFromUser = req.body;   
    console.log(dataFromUser);
     const newPerson = new person(dataFromUser);  //creates a new person document using the Mongoose model.


    
     const response = await newPerson.save();   // Line 1 → saves data in DB.
     console.log("Data is saved");      // Line 2 → log message only for your backend terminal.
      res.status(200).json({message: "form submitted"});     // Line 3 → sends the saved data back to the client, so the user/app knows what was stored. 200 http code means success more eg, 400, 500 etc.

  } catch (err) {
    
    if (err.code === 11000) {
  return res.status(409).json({ error: "Email already exists. Please use a different one." });
}

      console.log(err);
      res.status(500).json({error : 'Internal server error'})
  }


})

// 2. --- ADD THIS NEW CODE BLOCK ---
// 🔒 This is the NEW PROTECTED route to get all the data
// It is protected by your jwtauthMiddleWare
router.get('/data', jwtauthMiddleWare, async (req, res) => {
  try {
    // Check if the user's role (from the token) is 'admin'
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden: Only admins can access this data.' });
    }
    
    // If they are an admin, find all contacts
    // Use .sort({ createdAt: -1 }) to show newest messages first
    const data = await person.find().sort({ createdAt: -1 });
    
    // Send the data back to the frontend dashboard
    res.status(200).json(data);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// ===================================



// here we export router to import it our main server.js(where every thing happens)file:-
module.exports = router;