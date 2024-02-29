import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      unique: true,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    body: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Content ||
  mongoose.model("Content", contentSchema);
