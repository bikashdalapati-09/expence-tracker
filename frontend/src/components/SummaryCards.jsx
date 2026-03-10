import React from 'react'

export const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-gray-500">Total Expense</h2>
        <p className="text-2xl font-bold mt-2">₹0</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-gray-500">This Month</h2>
        <p className="text-2xl font-bold mt-2">₹0</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-gray-500">Today</h2>
        <p className="text-2xl font-bold mt-2">₹0</p>
      </div>

    </div>
  );
}

export default SummaryCards
