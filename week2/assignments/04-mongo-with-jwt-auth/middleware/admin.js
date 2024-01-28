const jwt = require("jsonwebtoken")

const {JWT_SECRET} = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;  /* Note headers are always converted to lowercase */
    // Bearer aslkdjaklsjdljasldkj_jwt_token
    const words = token.split(' ');
    const jwtToken = words[1]; 
    // username, type: username,"admin" in actual scenario to distinguish between user and admin
    try {
        const decoded = jwt.verify(jwtToken, JWT_SECRET);
        if(decoded.username) {
            next();
        }
    }
    catch(e) {
        res.status(403).json({
            msg: "You are not authenticated"
        });
    }
    /* Because of JWT we saved a expensive DB call */
}

module.exports = adminMiddleware;