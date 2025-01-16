function Login() {
    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic
        console.log('Login submitted');
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email: </label>
                    <input type="email" required />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;