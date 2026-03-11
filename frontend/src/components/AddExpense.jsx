import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddExpense = ({setRefresh}) => {
  const [user, setUser] = useState({
    title: "",
    amount: "",
    catagory: "",
    date: "",
  });

  const submitHandler = async () => {
    console.log(user);

    try {
      const res = await axios.post(
        `http://localhost:8000/api/expence/add-expence`,
        user,
        {
          withCredentials: true,
        },
      );
      if(res.data.success){
        toast.success(res.data.message);
        setRefresh(prev => !prev)
      }
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Add Expense</h2>

      <div className="grid md:grid-cols-4 gap-4">
        <input
          onChange={(e) => setUser({ ...user, title: e.target.value })}
          value={user.title}
          type="text"
          placeholder="Title"
          className="border p-2 rounded"
        />

        <input
          onChange={(e) => setUser({ ...user, amount: e.target.value })}
          value={user.amount}
          type="number"
          placeholder="Amount"
          className="border p-2 rounded"
        />

        <select
          value={user.catagory}
          onChange={(e) => setUser({ ...user, catagory: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Petrol">Petrol</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>

        <input
          onChange={(e) => setUser({ ...user, date: e.target.value })}
          value={user.date}
          type="date"
          className="border p-2 rounded cursor-pointer"
        />
      </div>

      <div className="flex justify-end">
        <button
        onClick={submitHandler}
        className="mt-4 mr-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
      >
        Add Expense
      </button>
      </div>
    </div>
  );
};

export default AddExpense;
