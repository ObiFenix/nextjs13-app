import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    image: {
      type: "string",
      required: false
    },
    content: {
      type: "string",
      required: false
    },
    source: {
      type: "string",
      required: true
    },
    author: {
      type: "object",
      required: true
    }
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Post || mongoose.model("Post", postSchema);
