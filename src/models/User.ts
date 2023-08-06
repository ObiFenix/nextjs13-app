import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: "string",
      unique: true,
      required: true
    },
    lastName: {
      type: "string",
      unique: true,
      required: true
    },
    email: {
      type: "string",
      unique: true,
      required: true
    },
    usernames: {
      type: "string",
      unique: true,
      required: true
    },
    password: {
      type: "string",
      unique: true,
      required: true
    }
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.User || mongoose.model("User", userSchema);
