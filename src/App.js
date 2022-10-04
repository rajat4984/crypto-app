import Footer from "./Components/Footer";
import HistoryCard from "./Components/HistoryCard";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import PageNumber from "./Components/PageNumber";
import { useGlobalContext } from "./context";
import "./style.css";

function App() {
  const { lightMode } = useGlobalContext();
  return (
    <div className={lightMode ? "dark-text" : "light-text"}>
      <Navbar />
      {/* <List />
      <PageNumber /> */}
      <HistoryCard/>
      <Footer />
    </div>
  );
}

export default App;
