// dashboard.js

window.addEventListener("load", async () => {
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "login.html"; // Redirect to login page if no token
    }

	try {
		const response = await fetch("http://localhost:3100/api/user-info", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			},
			body: JSON.stringify({ Thetoken: token })
		});

        const data = await response.json();
        if (response.ok) {
            document.getElementById("user-info").innerText = `Welcome, ${data.message.name}`;
            // Display other user info (e.g., expenses, incomes, etc.)
        } else {
            alert("Error fetching user data");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Server error.");
    }
});
