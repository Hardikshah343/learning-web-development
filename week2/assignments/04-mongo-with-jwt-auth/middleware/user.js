const jwt = require("jsonwebtoken")

const {JWT_SECRET} = require("../config");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;  /* Note headers are always converted to lowercase */
    // Bearer aslkdjaklsjdljasldkj_jwt_token
    const words = token.split('');
    const jwtToken = words[1]; 
    // username, type: username,"user"
    try {
        const decoded = jwt.verify(jwtToken, JWT_SECRET);
        if(decoded.username) {
            req.username = username; // extracted username and saved in req.
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

module.exports = userMiddleware;