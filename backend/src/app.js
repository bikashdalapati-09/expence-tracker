import express from 'express'
import userRouter from "../routes/userRoute.js"
import expenceRoute from '../routes/expenceRoute.js'
import cookieParser from "cookie-parser";


const app = express();
app.use(express.json());
app.use(cookieParser())

app.use("/api/user", userRouter);
app.use("/api/expence", expenceRoute);

export default app;