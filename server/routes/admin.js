const express = require('express');
const router = express.Router();
require("dotenv").config();

const {generateToken, jwtauthMiddleWare} = require('../jwt');

router.post('/', (req, res) => {

    try {

         const {email, password} = req.body;

    console.log("Email:", email);
  console.log("Password:", password);

   if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
    const token = generateToken({ role: "admin", email });
    console.log("logged in successfully")
    return res.json({ token });
  }

  res.status(401).json({ error: "Invalid credentials" });
        
    } catch (error) {
        
          console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });

    }
   
})

module.exports = router;