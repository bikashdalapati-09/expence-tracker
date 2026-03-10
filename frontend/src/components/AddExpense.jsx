import React from 'react'

const AddExpense = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">Add Expense</h2>

      <div className="grid md:grid-cols-4 gap-4">

        <input
          type="text"
          placeholder="Title"
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Amount"
          className="border p-2 rounded"
        />

        <select className="border p-2 rounded">
          <option>Food</option>
          <option>Petrol</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          className="border p-2 rounded"
        />

      </div>

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Expense
      </button>

    </div>
  );
}

export default AddExpense