import mongoose from "mongoose";
import skillSchema from "./skills.schema";


const SkillModel = mongoose.model("skills", skillSchema);

export default SkillModel;