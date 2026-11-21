
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoURL = process.env.MONGO_URL; // URL from env file

const connectDB = async () =>{
  try{
    await mongoose.connect(mongoURL);
    console.log("connected to atlas");

  }catch(error){

    console.log("database connection failed");
  }
};

export default connectDB;