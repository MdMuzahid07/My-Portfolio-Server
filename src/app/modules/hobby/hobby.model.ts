import mongoose from "mongoose";
import HobbySchema from "./hobby.schema";


const HobbyModel = mongoose.model("hobby", HobbySchema);

export default HobbyModel;