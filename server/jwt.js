const jwt = require('jsonwebtoken');
require("dotenv").config();


// Function to generate JWT token
const generateToken = (userData) => {
    // generate a new jwt token using user data
    return jwt.sign(userData, process.env.JWT_SECRET);
}




// function for verify jwt token
const jwtauthMiddleWare = (req, res, next) => {

    //extract the JWT token from the request headers
    const token = req.headers.authorization.split(' ')[1];

    if(!token) {
        return res.status(401).json({error : 'unauthorized'});
    }

    try {

        // varify the jwt token 
        const decode = jwt.verify(token, process.env.JWT_SECRET);

         req.user = decode; // attached user information to the request object
         next(); // go to next middleware/route
        
    } catch (error) {
        console.error(error);
        res.status(401).json({error : 'Invalid token'});
    }
}

module.exports = {generateToken, jwtauthMiddleWare};