import mongoose from "mongoose";
import { ISocial } from "./social.interface";


const socialSchema = new mongoose.Schema<ISocial>({
    name: {
        type: String,
        required: [true, "social name is required"],
        unique: true
    },
    icon: {
        type: String,
        default: ""
    },
    url: {
        type: String,
        required: [true, "social profile url is required"],
    }
},
    {
        timestamps: true
    }
);


export default socialSchema;