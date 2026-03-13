import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import toast from "react-hot-toast";
import UpdateExpenseModal from "./UpdateExpenseModal ";

const AllExpences = () => {
  const [data, setData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(null);

  const totalAmount = data.reduce((sum, expense) => sum + expense.amount, 0);

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
        fetchData();
      }
    } catch (error) {}
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/expence/get-expence`,
        {
          withCredentials: true,
        },
      );

      setData(res.data.expenses || []);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-7xl mx-auto mt-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-3xl font-bold text-gray-800">All Expenses</h2>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search expenses..."
              className="w-full pl-4 pr-28 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-700 placeholder-gray-400 transition"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-blue-700 shadow-md transition cursor-pointer">
              Search
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((expences) => (
                <tr key={expences._id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium">{expences.title}</td>

                  <td className="px-6 py-4">{expences.catagory}</td>

                  <td className="px-6 py-4">₹{expences.amount}</td>

                  <td className="px-6 py-4">
                    {new Date().toDateString() ===
                    new Date(expences.date).toDateString()
                      ? "Today"
                      : new Date(expences.date).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4 flex gap-2">
                    {/* Update Button */}
                    <button
                      onClick={() => {
                        setId(expences._id);
                        setIsModalOpen(true);
                      }}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md hover:bg-blue-200 transition cursor-pointer"
                    >
                      Update
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => {
                        deleteHandler(expences._id);
                      }}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded-md hover:bg-red-200 transition cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            {/* Footer */}
            <tfoot className="bg-gray-50 font-semibold">
              <tr>
                <td className="px-6 py-3" colSpan="2">
                  Total
                </td>
                <td className="px-6 py-3">₹{totalAmount}</td>
                <td colSpan="2"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Update Modal */}
      <UpdateExpenseModal
        isOpen={isModalOpen}
        id={id}
        refreshdata={fetchData}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default AllExpences;
