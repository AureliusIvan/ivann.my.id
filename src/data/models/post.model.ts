// blog_app/models/article.js
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  author: {
    type: String,
  },
  tags: {
    type: [String],
  },
  thumbnail: {
    type: String,
  },
  date: { type: Date, default: Date.now },
});

// index slug
PostSchema.index({ slug: 1 });

const PostModel = mongoose.model("Post", PostSchema);
export default PostModel;