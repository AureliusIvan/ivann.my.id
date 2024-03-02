// blog_app/models/article.js
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  date: { type: Date, default: Date.now },
});

const PostModel = mongoose.model("Post", PostSchema);
export default PostModel;