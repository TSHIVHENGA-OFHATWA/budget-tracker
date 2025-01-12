const token = localStorage.getItem('token');  // Get the token from localStorage

if (!token) {
    // If no token, redirect to login page
    window.location.href = 'login.html';
} else {
    // Fetch user info from the backend using the token
    fetch('http://localhost:3100/api/user-info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,  // Add token to the header
        },
        body: JSON.stringify({ Thetoken: token })  // Optionally send token in request body if needed
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'okay') {
            // Handle user data (e.g., show on dashboard)
            console.log(data.message);
        } else {
            console.log('Error fetching user info');
        }
    })
    .catch(error => {
        console.log('Error:', error);
    });
}
