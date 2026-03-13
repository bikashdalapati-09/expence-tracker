import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const UpdateExpenseModal = ({ isOpen, id, refreshdata,onClose }) => {
  const [data, setData] = useState({
    title: "",
    catagory: "",
    amount: "",
    date:""
  });

  if (!isOpen) return null;
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:8000/api/expence/update-expence/${id}`,
        data,
        {
          withCredentials: true,
        },
      );
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    refreshdata();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      {/* Modal Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 w-100">
        <h2 className="text-xl font-bold mb-4">Update Expense</h2>

        <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
          <input
            onChange={(e) => {
              setData({ ...data, title: e.target.value });
            }}
            value={data.title}
            type="text"
            placeholder="Title"
            className="border p-2 rounded-lg focus:outline-none"
          />

          <input
            onChange={(e) => {
              setData({ ...data, catagory: e.target.value });
            }}
            value={data.catagory}
            type="text"
            placeholder="Category"
            className="border p-2 rounded-lg focus:outline-none"
          />

          <input
            onChange={(e) => {
              setData({ ...data, amount: e.target.value });
            }}
            value={data.amount}
            type="number"
            placeholder="Amount"
            className="border p-2 rounded-lg focus:outline-none"
          />

          <input
            onChange={(e) => setData({ ...data, date: e.target.value })}
            value={data.date}
            type="date"
            className="border p-2 rounded cursor-pointer"
          />

          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateExpenseModal;
