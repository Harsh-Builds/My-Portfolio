const express = require('express');  
const app = express();  // our server

const db = require('../server/db'); // connection to database
require('dotenv').config();  // it is used for that, Node.js can load environment variables from  .env file into process.env.

const bodyParser = require('body-parser');
app.use(bodyParser.json()) // req.body :- store here 'req.body' after converting data in jsObject.


app.get('/', (req, res) => {
  res.send('Welcome on my Personal portfolio website');
})


// import the router file of person
const personRoutes = require('../server/routes/personRoute');
// use routers
app.use('/contact', personRoutes);




// server is active or listen at this port or address.
app.listen(3000, ()=>{
    console.log('server iss live');
})
