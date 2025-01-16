const Layout = ({ children, setCurrentPage }) => {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><button onClick={() => setCurrentPage("Dashboard")}>Dashboard</button></li>
              <li><button onClick={() => setCurrentPage("Transactions")}>Transactions</button></li>
              <li><button onClick={() => setCurrentPage("AddTransaction")}>Add Transaction</button></li>
              <li><button onClick={() => setCurrentPage("Reports")}>Reports</button></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </div>
    );
  };
  
  export default Layout;  