import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(404).json({
        message: "All fields are required 😁",
      });
    }

    if (password !== confirmPassword) {
      return res.status(404).json({
        message: "Password not matched 😭",
      });
    }

    const existUser = await User.findOne({ email });
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
      message: "User created Successfully 👌",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Server Issue",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Both field are required 😭",
      });
    }

    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(400).json({
        message: "Wrong email and password 😤",
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, existUser.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "incorrect password 🤡",
        success: false,
      });
    }

    const tokenData = {
      userId: existUser._id,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        message: "user login successfully",
        id: existUser._id,
        name: existUser.name,
        email: existUser.email,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "User logged out successfully 👌",
    });
  } catch (error) {
    console.log(error);
  }
};
