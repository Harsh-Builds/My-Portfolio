const express = require('express');  
const app = express();  // our server
const cors = require('cors');

const db = require('../server/db'); // connection to database
require('dotenv').config();  // it is used for that, Node.js can load environment variables from  .env file into process.env.

app.use(cors());
app.use(cors({ origin: 'https://my-portfoliothis.vercel.app' }));

const bodyParser = require('body-parser');
app.use(bodyParser.json()) // req.body :- store here 'req.body' after converting data in jsObject.
app.use(bodyParser.urlencoded({ extended: true })); // handles form-data

const PORT = process.env.PORT || 3000


// app.get('/', (req, res) => {
//   res.send('Welcome on my Personal portfolio website');
// })


// import the router file of person
const personRoutes = require('../server/routes/personRoute');
// use routers
app.use('/contact', personRoutes);




// server is active or listen at this port or address.
app.listen(PORT, ()=>{
    console.log('server iss live');
})
