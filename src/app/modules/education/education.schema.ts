import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
    institution: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    fieldOfStudy: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    gpa: {
        // Optional field
        type: String,
    },
    description: {
        // Optional field
        type: String,
    },
    achievements: {
        // Array of strings (Optional)
        type: [String],
    }
});


export default EducationSchema;