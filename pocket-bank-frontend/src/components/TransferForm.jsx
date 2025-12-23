import { useState } from "react";
import { sendMoney } from "../services/api";

export default function TransferForm({ balance, onSuccess }) {
  const [form, setForm] = useState({ recipient: "", amount: "", date: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.amount <= 0) return setError("Invalid amount");
    if (form.amount > balance) return setError("Insufficient Funds");

    setLoading(true);
    try {
      const res = await sendMoney({
        ...form,
        amount: Number(form.amount)
      });
      onSuccess(res);
      setForm({ recipient: "", amount: "", date: "" });
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-bold mb-4">Send Money</h2>
      {error && <p className="text-red-500">{error}</p>}

      <input className="input" placeholder="Recipient" value={form.recipient}
        onChange={(e) => setForm({ ...form, recipient: e.target.value })} />

      <input className="input" type="number" placeholder="Amount" value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })} />

      <input className="input" type="date" value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })} />

      <button disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded">
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
