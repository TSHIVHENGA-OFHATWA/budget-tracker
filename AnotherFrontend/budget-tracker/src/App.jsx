import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import AddTransaction from "./pages/AddTransaction";
import Reports from "./pages/Reports";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  // Render the appropriate page based on `currentPage`
  const renderPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return <Dashboard />;
      case "Transactions":
        return <Transactions />;
      case "AddTransaction":
        return <AddTransaction />;
      case "Reports":
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default App;