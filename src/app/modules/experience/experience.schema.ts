import mongoose from "mongoose";

const TechnologySchema = new mongoose.Schema({
    _id: { type: String, required: false },
    icon: { type: String, required: true },
    name: { type: String, required: true }
});

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
        type: String,
        required: true,
    },
    technologiesUsed: {
        type: [TechnologySchema],
        required: true,
    },
    achievements: {
        type: String,
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
        default: ""
    }
});

export default ExperienceSchema;
