const { User } = require("../db");
// We exported User table so we are refering to that

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    User.getOne({
        username: username,
        password: password
    })
    .then((value) => {
        if(value) {
            next();
        }
        else {
            res.status(403).json({
                msg: "User does not exist"
            });
        }
    });
}

module.exports = userMiddleware;