export default function BalanceCard({ balance }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <p className="text-gray-500">Current Balance</p>
      <h1 className="text-3xl font-bold">
        ${balance.toLocaleString()}
      </h1>
    </div>
  );
}
