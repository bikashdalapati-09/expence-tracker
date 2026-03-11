import Expence from "../models/expenceModel.js";
import mongoose from "mongoose";

export const addExpence = async (req, res) => {
  try {
    const { title, amount, catagory, date } = req.body;
    const userId = req.userId;

    if (!title || !amount || !catagory || !date) {
      return res.status(400).json({
        message: "All fields are required 🙃",
      });
    }

    await Expence.create({
      title,
      amount,
      catagory: catagory.toLowerCase(),
      date,
      user: userId,
    });

    return res.status(200).json({
      message: "Expense added successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getExpence = async (req, res) => {
  try {
    const userId = req.userId;

    const expenses = await Expence.find({ user: userId });

    res.status(200).json({
      expenses,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteExpence = async (req, res) => {
  try {
    const expenceId = req.params.id;
    const userId = req.userId;

    const expence = await Expence.findOne({
      _id: expenceId,
      user: userId,
    });
    if (!expence) {
      return res.status(400).json({
        message: "Expence does not found 😭",
      });
    }

    await Expence.deleteOne({
      _id: expenceId,
      user: userId,
    });

    return res.status(200).json({
      message: "Expence deleted successfully 👌",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateExpence = async (req, res) => {
  try {
    const { title, amount, catagory, date } = req.body;
    const expenceId = req.params.id;
    const userId = req.userId;

    const expence = await Expence.findOne({
      _id: expenceId,
      user: userId,
    });

    if (!expence) {
      return res.status(401).json({
        message: "Expence not found",
        success: false,
      });
    }

    await Expence.updateOne(
      {
        _id: expenceId,
        user: userId,
      },
      {
        $set: {
          title: title || expence.title,
          amount: amount || expence.amount,
          catagory: catagory || expence.catagory,
          date: date || expence.date,
        },
      },
    );
    return res.status(200).json({
      message: "expence updated successfully 👌",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const totalExpence = async (req, res) => {
  try {
    const userId = req.userId;

    const expences = await Expence.find({
      user: userId,
    });

    if (expences.length === 0) {
      return res.status(400).json({
        message: "Expences not found",
      });
    }
    let total = 0;
    expences.map((e) => {
      total += e.amount;
    });

    return res.status(200).json({
      message: "Total expence calculated 👍",
      "total": total,
    });
  } catch (error) {
    console.log(error);
  }
};

export const filterExpence = async (req, res) => {
  try {
    const catagory = req.query.catagory?.toLowerCase();
    const userId = req.userId;

    console.log(catagory);

    const expences = await Expence.find({ user: userId, catagory: catagory });
    if (expences.length === 0) {
      return res.status(400).json({
        message: "Any Expence not found, Add expences 🤡",
      });
    }

    return res.status(200).json({
      expences,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMonthlySummary = async (req, res) => {
  try {

    const summary = await Expence.aggregate([
      {
        $match: { user: new mongoose.Types.ObjectId(req.userId) }
      },
      {
        $group: {
          _id: { $month: "$date" },
          totalAmount: { $sum: "$amount" }
        }
      }
    ]);

    res.json(summary);

  } catch (error) {
    console.log(error);
  }
};
