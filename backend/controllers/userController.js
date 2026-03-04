import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
export const register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(404).json({
        message: "All fields are required 😁",
      });
    }

    if (password != confirmPassword) {
      return res.status(404).json({
        message: "Password not matched 😭",
      });
    }

    const existUser = await User.findOne({ name });
    if (existUser) {
      return res.status(400).json({
        message: "User already exists 😁",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
        message:"User created Successfully 👌",
        success: true
    })

  } catch (error) {
    console.log(error);
    return res.status(400).json({
        message:"Server Issue"
    })
  }
};
