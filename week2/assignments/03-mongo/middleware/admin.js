const { Admin } = require("../db");
// We exported Admin table so we are refering to that
 
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username: username,
        password: password
    })
    .then((value) =>{
        if(value) { // user exists
            next();
        }
        else {
            res.status(403).json({
                msg: "User doesnt exist"
            });
            return;
        }
    });
}

module.exports = adminMiddleware;