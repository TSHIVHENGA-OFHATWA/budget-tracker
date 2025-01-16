import React from "react";

const Dashboard = () => {
  const balance = 5000; // Placeholder value
  const income = 8000; // Placeholder value
  const expenses = 3000; // Placeholder value

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Current Balance: ${balance}</h2>
        <p>Total Income: ${income}</p>
        <p>Total Expenses: ${expenses}</p>
      </div>
    </div>
  );
};

export default Dashboard;