import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  content: {
    type: String,
  },
  date: { type: Date, default: Date.now },
});

ContentSchema.index({ title: 1 });

const ContentModel = mongoose.model("Content", ContentSchema);

export default ContentModel;