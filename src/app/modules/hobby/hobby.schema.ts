import mongoose from "mongoose";
import { IHobby } from "./hobby.interface";


const HobbySchema = new mongoose.Schema<IHobby>({
    name: {
        type: String,
        required: [true, "hobby name is required"],
        unique: true
    },
    icon: {
        type: String,
    }
},
    {
        timestamps: true
    }
);


export default HobbySchema;