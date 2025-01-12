// register.js

document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();  // Prevent form submission

    const surname = document.getElementById("surname").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        const response = await fetch('http://localhost:3100/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ surname, name, email, phonenumber: phone, thepassword: password, confirmpassword: confirmPassword })
        });

        const data = await response.json();
        if (response.ok) {
            alert("Registration successful!");
            window.location.href = "login.html"; // Redirect to login page
        } else {
            alert(data.massage || "Error registering user.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Server error.");
    }
});
