import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ExpenseList = ({ setRefresh, refresh }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const deleteHandler = async (id) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/api/expence/delete-expence/${id}`,
        {},
        {
          withCredentials: true,
        },
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setRefresh((prev) => !prev);
        fetchData();
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

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
  }, [refresh]);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      {/* Header with Title and View All button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Recent Expenses</h2>
        <button
          onClick={() => (navigate("/allexpence"))}
          className="border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50 cursor-pointer"
        >
          View All
        </button>
      </div>

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
                <button
                  onClick={() => deleteHandler(expense._id)}
                  className="text-red-500 cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
