import axios from "axios";
import React, { useEffect, useState } from "react";

const ExpenseList = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/expence/recent-expence`,
        {
          withCredentials: true,
        },
      );
      setData(res.data.expences);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Recent Expenses</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Title</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((expense) => (
            <tr key={expense._id} className="border-b">
              <td className="py-2">{expense.title}</td>
              <td>{expense.catagory}</td>
              <td>₹{expense.amount}</td>
              <td>
                {new Date().toDateString() ===
                new Date(expense.date).toDateString()
                  ? "Today"
                  : new Date(expense.date).toLocaleDateString()}
              </td>
              <td>
                <button className="text-red-500 cursor-pointer">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
