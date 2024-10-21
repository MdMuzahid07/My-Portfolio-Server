import mongoose from "mongoose";
import EducationSchema from "./education.schema";


const EducationModel = mongoose.model("education", EducationSchema);

export default EducationModel;