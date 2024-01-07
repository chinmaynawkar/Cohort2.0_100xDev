const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db"); //import the admin, course  model
const router = express.Router();

router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin created successfully'
    })
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    // You need to create a course in the DB with the details given in the request body
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod

    const newCourse = await Course.create({ // create a new course
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
   
    // Fetching all the courses from the DB and send it back in the response
    const response = await Course.find({});

    res.json({
        courses: response // send the courses in the response
    })

});


module.exports = router;