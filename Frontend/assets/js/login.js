// login.js

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();  // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('http://localhost:3100/api/logs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert("Login successful!");
            localStorage.setItem("token", data.token); // Save token in local storage
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert(data.message || "Error logging in.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Server error.");
    }
});
