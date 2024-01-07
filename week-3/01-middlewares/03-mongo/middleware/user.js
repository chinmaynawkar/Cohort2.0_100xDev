const {User} = require("../db"); //import the user model

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;

    //for checking if this user exists
    User.findOne({
        username: username,
        password: password  
    })
    .then(function(value) { //if it exists do this
        if(value) {
            next();
        } else {
            res.status(403).json({
               msg: "User doesn't exists"
        })
    }
})
}



module.exports = userMiddleware;