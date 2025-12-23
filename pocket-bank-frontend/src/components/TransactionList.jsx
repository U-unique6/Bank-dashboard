export default function TransactionList({ transactions, filter }) {
  const filtered = transactions.filter((t) => {
    if (filter === "Income") return t.type === "credit";
    if (filter === "Expenses") return t.type === "debit";
    return true;
  });

  return (
    <div className="bg-white rounded-xl shadow">
      {filtered.map((t) => (
        <div key={t.id} className="flex justify-between p-4 border-b">
          <div>
            <p className="font-semibold">{t.description}</p>
            <p className="text-sm text-gray-500">{t.date}</p>
          </div>
          <p
            className={`font-bold ${
              t.type === "credit" ? "text-green-600" : "text-red-600"
            }`}
          >
            {t.type === "credit" ? "+" : "-"}${t.amount}
          </p>
        </div>
      ))}
    </div>
  );
}
