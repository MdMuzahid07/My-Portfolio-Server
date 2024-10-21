import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    position: {
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
    responsibilities: {
        type: [String],
        required: true,
    },
    technologiesUsed: {
        type: [String],
        required: true,
    },
    achievements: {
        type: [String],
    },
    employmentType: {
        type: String,
        enum: ["Full-time", "Part-time", "Contract", "Freelance", "Internship"],
        required: true,
    },
    companyWebsite: {
        type: String,
    },
    logo: {
        type: String,
    }
});


export default ExperienceSchema;