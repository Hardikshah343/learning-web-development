const express = require("express");
const { userZodSchema, userUpdateZodSchema, userSigninZodSchema } = require("./../validators/usersValidator");
const { User } = require("./../models/User");
const { Account } = require("./../models/Account");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./../config");
const { authMiddleware } = require("./middleware");

const router = express.Router();

/* When user wants to create account with valid inputs, a token will be sent */
router.post("/signup", async (req, res) => {
    console.log(req.body);
    const { success } = userZodSchema.safeParse(req.body);
    
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        });
    }    
    const existingUser = await User.findOne({
        username: req.body.username
    });
    console.log("Existing user : ", existingUser);

    if(existingUser) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        });
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    console.log("Entry in DB: ", user);

    const userId = user._id;
    /* Add some balance between 1 to 10000 */
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000,
    });
    
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.status(200).json({
        message: "User Created Successfully",
        token: token
    });
});

/* 
When user wants to get a token, if the account is already created,
with valid user id and password, return a valid token 
*/
router.post("/signin", async (req, res) => {
    console.log(req.body);
    const { success } = userSigninZodSchema.safeParse(req.body);

    if(!success) {
        res.status(411).json({
            message: "Invalid credentials format! "
        });
    }
    const existingUser = await User.findOne({
        username: req.body.username,
        password: req.body.password,
    });

    if (existingUser) {
        const token = jwt.sign({
            userId: existingUser._id
        }, JWT_SECRET);

        res.json({
            token: token,
        });

        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    });
});

/*
NOTE: Passwords should not be stored as plain text.
Passwords should be encrypted or hashed and then stored.
Also add salt along with password, 
so that if two hash's are same no one should guess the password.
*/
/* When user wants to update password, first name or last name, 
this route will be used */
router.put("/", authMiddleware, async (req, res) => {
    const { success } = userUpdateZodSchema.safeParse(req.body);

    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        });
    }
    const updateStatus = await User.updateOne({ _id: req.userId }, req.body);
    console.log(updateStatus);

    res.json({
        message: "Update successfully"
    });
});


/* When users need to find username to send money to, then with first name or last name we can filter out. Also note do not sent password out */
router.get("/bulk", async (req, res) => { 
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex" : filter,
            }
        }, {
            lastName: {
                "$regex": filter,
            }
        }]    
    });

    res.status(200).json({
        user: users.map( user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id,
        }))
    });
});

router.use((err, req, res, next) => {
    console.log("Invalid page hit, heres the error: ", err);
    res.status(404).json({
        message: "Bad gateway"
    });
});


module.exports = router;
