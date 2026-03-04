import app from "./app.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
// console.log(process.env.MONGO_URI);


const PORT = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Problem in mongoDB connection");
    
  })
