const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./../config");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(403).json({
            message: "Invalid token/ Not Authorised"
        });
    }
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.userId) {
            req.userId = decoded.userId;
            next();
        } else {
            return res.status(403).json({
                message: "Invalid token/ Not Authorised heheh"
            });
        }

    } catch (error) {
        console.log("Whats the error: ", error);
        return res.status(403).json({
            message: "Invalid token/ Not Authorised"
        });
    }
}


module.exports = {
    authMiddleware
}