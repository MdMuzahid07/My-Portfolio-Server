import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
        required: true,
    },
    completionDate: {
        type: String,
        required: true,
    },
    certificateLink: {
        type: String,
    },
    skillsLearned: {
        type: [Object],
        required: true,
    }
});

export default CourseSchema;