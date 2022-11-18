import React, { useState,useEffect } from "react";
import Footer from "./Components/Footer";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import PageNumber from "./Components/PageNumber";
import { useGlobalContext } from "./context";
import LineChart from "./Components/LineChart";
import "./style.css";

function App() {
  const { lightMode } = useGlobalContext();
  
  return (
    <div className={lightMode ? "dark-text" : "light-text"}>
      <Navbar />
      <List />
      <PageNumber />
      <LineChart  />
      <Footer />
    </div>
  );
}

export default App;
