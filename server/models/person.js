const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name: {
        type : String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true        
    },

  message : {
    type: String,
    required: true
  },

  createdAt: {              // auto save time and date
    type: Date, 
    default: Date.now 
}
});


// create person model:- by this we actually interact with database using that schema we defined
const person = mongoose.model('person', personSchema );         // here model represent a collection of database.
module.exports = person;
