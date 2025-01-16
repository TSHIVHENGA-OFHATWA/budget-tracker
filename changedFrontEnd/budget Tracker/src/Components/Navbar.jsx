import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ padding: '1rem', background: '#f5f5f5', marginBottom: '1rem' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Dashboard</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
}

export default Navbar;