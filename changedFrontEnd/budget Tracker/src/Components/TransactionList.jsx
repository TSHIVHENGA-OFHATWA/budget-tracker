function TransactionList({ transactions }) {
    return (
        <div>
            <h2>Transactions</h2>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        {transaction.date}: {transaction.description} - ${transaction.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;