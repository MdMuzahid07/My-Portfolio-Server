import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    titleOfHomepageHeader: {
        type: String,
    },
    subtitleOfHomepageHeader: {
        type: String,
    },
    aboutMe: {
        type: String,
    },
    profileImage: {
        type: String,
    },
    motivation: {
        type: String,
    },
    email: {
        type: String,
    },
    resumeLink: {
        type: String,
    }
},
    {
        timestamps: true
    }
);


export default ProfileSchema;