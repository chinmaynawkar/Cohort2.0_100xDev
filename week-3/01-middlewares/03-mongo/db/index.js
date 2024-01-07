const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect('mongodb+srv://cnawkar19:eKrc13oL6L21fY7z@mydatabase.ao4wrdn.mongodb.net/course_selling_app');


// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    usrname : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course"
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    price : Number,
    imageLink : String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}