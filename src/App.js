import Footer from "./Components/Footer";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import PageNumber from "./Components/PageNumber";
import "./style.css";

function App() {
  return (
    <div>
      <Navbar />
      <List />
      <PageNumber/>
      <Footer/>
    </div>
  );
}

export default App;
