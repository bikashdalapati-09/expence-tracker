import express from 'express'
import userRouter from "../routes/userRoute.js"
import expenceRoute from '../routes/expenceRoute.js'
import cookieParser from "cookie-parser";
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use("/api/user", userRouter);
app.use("/api/expence", expenceRoute);

export default app;