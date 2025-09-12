const express = require('express');  
const router = express.Router();

const person = require('../models/person'); // import our person model.

// POST method route to add a person:-

router.post('/', async (req, res) => {

  try {
    
    const dataFromUser = req.body;   
    const newPerson = new person(dataFromUser);  //creates a new person document using the Mongoose model.


    const response = await newPerson.save();   // Line 1 → saves data in DB.

     console.log("Data is saved");      // Line 2 → log message only for your backend terminal.
      res.status(200).json(response);     // Line 3 → sends the saved data back to the client, so the user/app knows what was stored. 200 http code means success more eg, 400, 500 etc.

  } catch (err) {
    
      console.log(err);
      res.status(500).json({error : 'Internal server error'})
  }


})

// here we export router to import it our main server.js(where every thing happens)file:-
module.exports = router;