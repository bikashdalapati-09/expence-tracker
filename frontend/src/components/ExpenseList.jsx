import React from 'react'

const ExpenseList = () => {
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

          <tr className="border-b">
            <td className="py-2">Food</td>
            <td>Food</td>
            <td>₹200</td>
            <td>Today</td>
            <td>
              <button className="text-red-500">Delete</button>
            </td>
          </tr>

          <tr className="border-b">
            <td className="py-2">Uber</td>
            <td>Transport</td>
            <td>₹150</td>
            <td>Today</td>
            <td>
              <button className="text-red-500">Delete</button>
            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default ExpenseList