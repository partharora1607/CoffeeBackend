const MONGODB_URI =
  "mongodb+srv://partharora1607:parth123@cluster0.jyfm6ho.mongodb.net/?appName=Cluster0";

import mongoose from "mongoose";
import express from "express";

const app = express();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(MONGODB_URI);
    app.get("/", (req, res) => {
      res.send("Hello");
    });
    app.listen(3000,()=>{
        console.log("App running on port number : " , 3000);
    })
    console.log("\n MongoDB connected sucessfully !!" , connectionInstance.connection.host);
  } catch (err) {
    console.log("Connection failed ! : ", err);
    process.exit(1);
  }
};

export default connectDB;