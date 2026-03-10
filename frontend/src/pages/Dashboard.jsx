import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import AddExpense from "../components/AddExpense";
import ExpenseList from "../components/ExpenseList";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-6xl mx-auto p-6 space-y-8">

        <SummaryCards />

        <AddExpense />

        <ExpenseList />

      </div>

    </div>
  );
}

export default Dashboard;