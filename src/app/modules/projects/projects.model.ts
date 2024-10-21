import mongoose from "mongoose";
import projectSchema from "./projects.schema";


const ProjectModel = mongoose.model("projects", projectSchema);

export default ProjectModel;