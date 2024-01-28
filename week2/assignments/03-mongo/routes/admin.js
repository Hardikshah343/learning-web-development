const { Router } = require("express");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const zod = require("zod");
const router = Router();

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

    // check if user is already present
    Admin.findOne({
        username: username,
        password: password
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

    /* Or simply assuming all users will be new */
    // Note: make the callback function of post as async
    // await Admin.create({
    //     username,
    //     password
    // });
    // res.status(200).json({
    //     message: "Admin created successfully"
    // });    
});

router.post('/courses', adminMiddleware, async (req, res) => {
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

router.get('/courses', adminMiddleware, async (req, res) => {
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