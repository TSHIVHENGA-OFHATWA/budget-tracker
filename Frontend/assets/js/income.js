// income.js

document.getElementById("incomeForm").addEventListener("submit", async (e) => {
    e.preventDefault();  // Prevent form submission

    const userId = localStorage.getItem("userId"); // Retrieve user ID
    const amount = document.getElementById("amount").value;
    const source = document.getElementById("source").value;
    const description = document.getElementById("description").value;

    try {
        const response = await fetch('http://localhost:3100/api/income-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, amount, source, description })
        });

        const data = await response.json();
        if (response.ok) {
            alert("Income added successfully!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert(data.message || "Error adding income.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Server error.");
    }
});
