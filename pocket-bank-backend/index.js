const express = require("express");
const cors = require("cors");
const { balance, transactions } = require("./data");

const app = express();
app.use(cors());
app.use(express.json());

let currentBalance = balance;
let transactionList = transactions;

app.get("/dashboard", (req, res) => {
  res.json({
    balance: currentBalance,
    transactions: transactionList,
  });
});

app.post("/transfer", (req, res) => {
  const { recipient, amount, date } = req.body;

  if (amount <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  if (amount > currentBalance) {
    return res.status(400).json({ message: "Insufficient Funds" });
  }

  setTimeout(() => {
    currentBalance -= amount;

    transactionList.unshift({
      id: Date.now(),
      date,
      description: recipient,
      amount,
      type: "debit",
    });

    res.json({
      balance: currentBalance,
      transactions: transactionList,
    });
  }, 1500);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
