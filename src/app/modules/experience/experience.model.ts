import mongoose from "mongoose";
import ExperienceSchema from "./experience.schema";


const ExperienceModel = mongoose.model("experience", ExperienceSchema);

export default ExperienceModel;