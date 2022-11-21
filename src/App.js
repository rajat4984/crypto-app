import React from "react";
import Footer from "./Components/Footer";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import PageNumber from "./Components/PageNumber";
import { useGlobalContext } from "./context";
import CoinApp from "./Components/coinPage/CoinApp";
import "./style.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const { lightMode } = useGlobalContext();
  return (
    <div className={lightMode ? "dark-text" : "light-text"}>
      <Navbar />
      <Routes>
        <Route path="/" element={[<List />, <PageNumber />]} />
        <Route path="coinInfo" element={<CoinApp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
