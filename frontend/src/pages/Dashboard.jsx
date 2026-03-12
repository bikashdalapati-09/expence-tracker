import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import AddExpense from "../components/AddExpense";
import ExpenseList from "../components/ExpenseList";
import { useState } from "react";

function Dashboard() {
  const [refresh, setRefresh] = useState(false)
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-6xl mx-auto p-6 space-y-8">

        <SummaryCards refresh={refresh} />

        <AddExpense setRefresh={setRefresh} />

        <ExpenseList setRefresh={setRefresh} refresh={refresh} />

      </div>

    </div>
  );
}

export default Dashboard;