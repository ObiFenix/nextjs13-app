import mongoose from "mongoose";

const MONGO_DB_URL =
  "mongodb+srv://mobi:r6MXrZPD4Imu9pag@cluster0.3loe4cp.mongodb.net/blog?retryWrites=true&w=majority";

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGO_DB_URL);
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export default connect;
