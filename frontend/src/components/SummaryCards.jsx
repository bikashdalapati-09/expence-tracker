import axios from "axios";
import React, { useEffect, useState } from "react";

const SummaryCards = ({refresh}) => {
  const [data, setData] = useState({
    total: 0.0,
    monthly: 0.0,
    today: 0,
  });

  const fetchTotal = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/expence/total-expence`,
        {
          withCredentials: true,
        },
      );
      setData((prev) => ({
        ...prev,
        total: res.data.total
      }));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const fetchMonthly = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/expence/monthly-summary`,
        {
          withCredentials: true,
        },
      );

      setData((prev) => ({
        ...prev,
        monthly: res.data[0].totalAmount,
      }));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchTotal();
    fetchMonthly();
  }, [refresh]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-gray-500">Total Expense</h2>
        <p className="text-2xl font-bold mt-2">{data.total}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-gray-500">This Month</h2>
        <p className="text-2xl font-bold mt-2">{data.monthly}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-gray-500">Today</h2>
        <p className="text-2xl font-bold mt-2">₹0</p>
      </div>
    </div>
  );
};

export default SummaryCards;
