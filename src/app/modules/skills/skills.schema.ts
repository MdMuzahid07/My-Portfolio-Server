import mongoose from "mongoose";
import { ISkill } from "./skills.interface";


const skillSchema = new mongoose.Schema<ISkill>({
    name: {
        type: String,
        required: [true, "technology name is required"],
        unique: true
    },
    icon: {
        type: String,
    },
    url: {
        type: String,
        required: [true, "technology official url is required"],
    }
},
    {
        timestamps: true
    }
);


export default skillSchema;