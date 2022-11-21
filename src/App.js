import React, { useState,useEffect } from "react";
import Footer from "./Components/Footer";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import PageNumber from "./Components/PageNumber";
import { useGlobalContext } from "./context";
import CoinApp from "./Components/coinPage/CoinApp";
import "./style.css";

function App() {
  const { lightMode } = useGlobalContext();
  
  return (
    <div className={lightMode ? "dark-text" : "light-text"}>
      {/* <CoinApp/> */}
      <Navbar />
      <List />
      <PageNumber />
      <Footer />
    </div>
  );
}

export default App;
