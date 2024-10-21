import mongoose from "mongoose";
import CourseSchema from "./courses.schema";


const CourseModel = mongoose.model("course", CourseSchema);

export default CourseModel;