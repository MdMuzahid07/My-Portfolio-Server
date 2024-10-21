import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "this is required"],
        unique: true
    },
    coreTechs: {
        type: [String],
        required: [true, "this is required"],
    },
    usedTechnologies: {
        type: [String],
        required: [true, "this is required"],
    },
    thumbnailImg: {
        type: String,
    },
    feature_1: {
        heading: String,
        detail: String,
        image: String,
    },
    feature_2: {
        heading: String,
        detail: String,
        image: String,
    },
    feature_3: {
        heading: String,
        detail: String,
        image: String,
    },
    projectYear: {
        type: Number,
        required: [true, "this is required"],
    },
    live_url: String,
    source: {
        server: String,
        client: String,
    },
},
    {
        timestamps: true
    }
);


export default projectSchema;