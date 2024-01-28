const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if user is already present
    User.findOne({
        username,
        password
    })
    .then((value) => {
        if(value) {
            res.json({
                msg: "User already exists"
            });
        }
        else {
            User.create({
                username,
                password
            }) // To add to data base under table User.
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
        res.status(404).json({ msg: "Something went wrong with DB, can not check for user if already exists."});        
    });

    
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    /* Not how this end point is not protected, because we want all to view courses */
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
    const username = req.headers.username;
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