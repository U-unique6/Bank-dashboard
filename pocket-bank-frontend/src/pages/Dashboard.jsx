import { useEffect, useState } from "react";
import { fetchDashboard } from "../services/api";
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";
import TransferForm from "../components/TransferForm";
import FilterTabs from "../components/FilterTabs";

export default function Dashboard() {
  const [data, setData] = useState({ balance: 0, transactions: [] });
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchDashboard().then(setData);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <BalanceCard balance={data.balance} />
      <FilterTabs filter={filter} setFilter={setFilter} />
      <TransactionList transactions={data.transactions} filter={filter} />
      <TransferForm balance={data.balance} onSuccess={setData} />
    </div>
  );
}
