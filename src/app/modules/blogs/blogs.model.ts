import mongoose from "mongoose";
import BlogSchema from "./blogs.schema";


const BlogModel = mongoose.model("blog", BlogSchema);

export default BlogModel;