import mongoose from "mongoose";

const { MONGODB_URI } = process.env;



//if (!MONGODB_URI) {
  throw new Error("MONGODB_URI must be defined");
//}

const uri = "mongodb+srv://papucho:Alchu3101@cluster0.u3j4o7l.mongodb.net/xpectraWEB.usuarios"

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(uri);
    if (connection.readyState === 1) {
      console.log("MongoDB Connected");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};