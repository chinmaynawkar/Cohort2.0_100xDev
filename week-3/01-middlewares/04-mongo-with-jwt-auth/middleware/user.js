const jwt = require('jsonwebtoken');
const secret = require('../index');
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authroization;
    const words = token.split(" ");
    const jwtToken = words[1]; // what this does is it splits the token into two parts and 
    //takes the second part which is the token

    const decodedValue = jwt.verify(jwtToken, secret);
    if(decodedValue.username) {
        next();
    } else {
        res.status(403).json({
            msg: "You are not authenicated"
        })
    }


}

module.exports = userMiddleware;