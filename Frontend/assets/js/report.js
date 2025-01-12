// report.js

document.getElementById("generateReportForm").addEventListener("submit", async (e) => {
    e.preventDefault();  // Prevent form submission

    const token = localStorage.getItem("token");
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    if (!token) {
        alert("You need to be logged in to generate the report.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:3100/api/get-report?month=${month}&year=${year}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await response.json();
        if (response.ok) {
            // Display the report data on the page (e.g., total income, total expense)
            document.getElementById("report").innerText = JSON.stringify(data, null, 2); // Example
        } else {
            alert("Error generating report.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Server error.");
    }
});
