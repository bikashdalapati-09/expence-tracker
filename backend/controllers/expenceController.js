import Expence from "../models/expenceModel.js";

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
      catagory,
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
      success: true
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteExpence = async (req, res) => {
    
}
