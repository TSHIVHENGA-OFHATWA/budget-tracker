import React from "react";

const Transactions = () => {
  const transactions = [
    { id: 1, type: "Income", amount: 1000, date: "2025-01-01" },
    { id: 2, type: "Expense", amount: 500, date: "2025-01-02" },
  ]; // Placeholder data

  return (
    <div>
      <h1>Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>${transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;