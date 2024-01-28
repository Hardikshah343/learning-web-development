const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const zod = require("zod");
const router = Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

const CourseSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
    price: zod.number(),
    imageLink: zod.string()
});

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    Admin.findOne({
        username,
        password
    })
    .then((value) => {
        if (value) {
            // user already exists
            res.status(403).json({
                msg: "Admin already exists"
            });
        }
        else {
            Admin.create({
                username: username,
                password: password
            })
            .then(()=> {
                res.status(200).json({
                    msg: "Admin created successfully"
                });
            })
            .catch(() => {
                res.status(404).json({
                    msg: "Admin not created, something went wrong. Please try again!"
                });
            });
        }
    })
    .catch(()=>{
        res.status(404).json({ msg: "Something went wrong with DB, can not check for admin if already exists."});        
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // Authenticate the user 
    const user = await Admin.find({
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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    // Implement course creation logic
    // if we are here that means user is authenticated
    const courseDetails = await CourseSchema.safeParse(req.body);
    // input validation
    if(courseDetails.success) {
        Course.create(courseDetails.data)
        .then((addedCourse) => {
            res.json({ msg: "Course created successfully.", courseId: addedCourse._id });
        })
        .catch(() => {
            res.json({ msg: "Something went wrong while adding course at DB end."});
        });
    }
    else {
        res.json({
            msg: "Invalid course details. Please check."
        });
    }
    /* Using async await */
    // if(courseDetails.success) {
    //     const addedCourse = await Course.create(courseDetails.data);
    //     res.json({ msg: "Course created successfully.", courseId: addedCourse._id });
    // }
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
        // Implement fetching all courses logic
        Course.find({})
        .then((response) => {
            res.json(response);
        })
        .catch(() => {
            res.json({ msg: "Something went wrong at DB end."});
        });
        /* Asynchronous */
        // const allCourses = await Course.find({});
        // res.json(allCourses);
    
        /* Note: 
        Similar functionality is added in user.
        Then why to put it here as well
        In real world, admin may just add the course and not publish them 
        Then there will be a extra field "isPublished" and at user end we filter only on published courses 
        */ 
    
});

module.exports = router;