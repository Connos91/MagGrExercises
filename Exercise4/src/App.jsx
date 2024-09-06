import useDataFetcher from "./useDataFetcher";
import Sidebar from "./components/sidebar";
import MainContnet from "./components/mainContent";
import "./css/main.css";

const App = () => {
  const { isLoading, error } = useDataFetcher();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error?.message}
      </div>
    );
  }

  return (
    <div className="layout">
      <Sidebar />
      <MainContnet />
    </div>
  );
};

export default App;
