const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({
        username,
        password
    })
    .then((value) => {
        if (value) {
            // user already exists
            res.status(403).json({
                msg: "User already exists"
            });
        }
        else {
            User.create({
                username: username,
                password: password
            })
            .then(()=> {
                res.status(200).json({
                    msg: "User created successfully"
                });
            })
            .catch(() => {
                res.status(404).json({
                    msg: "User not created, something went wrong. Please try again!"
                });
            });
        }
    })
    .catch(()=>{
        res.status(404).json({ msg: "Something went wrong with DB, can not check for User if already exists."});        
    });
});

router.post('/signin', async (req, res) => {
    // Implement User signup logic
    const username = req.body.username;
    const password = req.body.password;

    // Authenticate the user 
    const user = await User.find({
        username,
        password
    });

    if(user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            msg: token
        });
    }
    else {
        res.json({
            msg: "Incorrect email or password"
        });
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    Course.find({})
    .then((response) => {
        res.json(response);
    })
    .catch(() => {
        res.json({ msg: "Something went wrong at DB end."});
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    // const username = req.headers.username; // here we are not getting username
    const username = req.username; // handled in the middleware userMiddleware
    const courseId = req.params.courseId;

    Course.findOne({
        _id: courseId
    }).then(() => {
        User.updateOne({
            username
        }, {
            "$push": {
                purchasedCourses: courseId
            }
        }).then(()=> {
            res.json({ msg: "Course purchased successfully" });
        }).catch(()=> {
            res.json({msg:"Issues while updating at DB."});
        });
    }).catch(()=> {
        res.json({msg:"Course ID does not exists."});
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    res.json({
        courses: courses
    });
});

module.exports = router