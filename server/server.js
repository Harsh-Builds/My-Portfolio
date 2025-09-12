const express = require('express');  
const app = express();  // our server




app.get('/', (req, res) => {
  res.send('Welcome on my Personal portfolio website');
})



// server is active or listen at this port or address.
app.listen(3000, ()=>{
    console.log('server iss live');
})
