import React from "react";
import { useContext, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(true);
  const [data, setData] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=2&sparkline=false`;

  const dataHandler = async () => {
    const {data} = await axios.get(url);
    setData([...data]);
  };

  const lightModeHandler = () => {
    if (lightMode) {
      document.body.style.backgroundColor = "#282828";
    } else {
      document.body.style.backgroundColor = "#f4f5f6";
    }
    setLightMode(!lightMode);
  };
  return (
    <AppContext.Provider
      value={{ lightModeHandler, lightMode, dataHandler, data }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};