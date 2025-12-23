let balance = 12500;

let transactions = [
  {
    id: 1,
    date: "2025-01-10",
    description: "Salary",
    amount: 15000,
    type: "credit",
  },
  {
    id: 2,
    date: "2025-01-12",
    description: "Starbucks",
    amount: 350,
    type: "debit",
  },
];

module.exports = { balance, transactions };
