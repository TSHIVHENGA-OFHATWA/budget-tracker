// expense.js

document.getElementById("expenseForm").addEventListener("submit", async (e) => {
    e.preventDefault();  // Prevent form submission

    const userId = localStorage.getItem("userId"); // Retrieve user ID
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    try {
        const response = await fetch('http://localhost:3100/api/expense-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, amount, category, description })
        });

        const data = await response.json();
        if (response.ok) {
            alert("Expense added successfully!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert(data.message || "Error adding expense.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Server error.");
    }
});