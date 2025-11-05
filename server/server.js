const express = require('express');  
const app = express();  // our server
const cors = require('cors');

const db = require('../server/db'); // connection to database
require('dotenv').config();  // it is used for that, Node.js can load environment variables from  .env file into process.env.

// This replaces your second cors line
app.use(cors({
  origin: 'https://my-portfoliothis.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Explicitly allow POST
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json()) // req.body :- store here 'req.body' after converting data in jsObject.
app.use(bodyParser.urlencoded({ extended: true })); // handles form-data

const PORT = process.env.PORT || 5000


app.get('/', (req, res) => {
  res.send('Welcome on my Personal portfolio website');
})


// import the router file of person
const personRoutes = require('../server/routes/personRoute');
// use routers
app.use('/contact', personRoutes);

const adminRoutes = require('../server/routes/admin');
app.use('/admin', adminRoutes );


// server is active or listen at this port or address.
app.listen(PORT, ()=>{
    console.log('server iss live');
})
