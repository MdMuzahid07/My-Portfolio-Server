import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    thumbnail: {
        type: String
    },
    texts: {
        type: String,
        required: true,
    }
});

export default BlogSchema;