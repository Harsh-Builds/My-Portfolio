const mongoose = require('mongoose');  //here we import the mongoose library.
require('dotenv').config();

//Define the mongodb connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/myPortfolio';
// const mongoURL = process.env.MONGODB_URL;  //we use this to get that URL from .env file SO, our atlas string/url stays sequred.

mongoose.connect(mongoURL, {
    // useNewUrlParser : true,     // these both are just mandatory parameter to prevent future problems during database connection.
   //  useUnifiedTopology: true         // in this version they are not workable.
    
})

const theDB = mongoose.connection;

theDB.on('connected', () => {        
    console.log('Connected to MongoDB server');
})

theDB.on('error', (err) => {        
    console.log('Mongo connection error', err);
})

theDB.on('disconnected', () => {        
    console.log('DisConnected to MongoDB server');
})

// Now, Export the DataBase connection.
module.exports = theDB;
