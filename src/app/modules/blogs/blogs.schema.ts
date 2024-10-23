import mongoose from "mongoose";
import { IBlog } from "./blogs.interface";

const BlogSchema = new mongoose.Schema<IBlog>({
    title: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        default: ""
    },
    texts: {
        type: String,
        required: true,
    }
});

export default BlogSchema;