import mongoose from "mongoose";

const expenceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    catagory: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true,
    },
  },
  { timestamps: true },
);

const Expence = mongoose.model("Expence", expenceSchema);
export default Expence;
