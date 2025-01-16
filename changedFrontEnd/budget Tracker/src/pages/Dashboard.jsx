import { useState, useEffect } from 'react';
import TransactionList from '../components/TransactionList';

function Dashboard() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Fetch transactions from the backend
        fetch('http://localhost:3000/api/transactions')
            .then((response) => response.json())
            .then((data) => setTransactions(data))
            .catch((error) => console.error('Error fetching transactions:', error));
    }, []);

    return (
        <div style={{ padding: '1rem' }}>
            <h1>Budget Tracker Dashboard</h1>
            <TransactionList transactions={transactions} />
        </div>
    );
}

export default Dashboard;