import React, { useEffect } from "react";
import { useContext, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(true);
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  const dataHandler = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=${pageNum}&sparkline=false`;
    const { data } = await axios.get(url);
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

  const getCoinData = (coinId) => {
    userDataHandler(coinId);
  };

  // ---------------FOR-LINE-CHART------------------

  const convertToDate = (unixTime) => {
    unixTime = unixTime / 1000; //diving to convert from miliseconds to seconds
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date = new Date(unixTime * 1000); //making date normal
    const currentMonthNum = date.getMonth();
    const currentMonth = months[currentMonthNum]; //getting month from array
    const currentDate = date.toLocaleDateString("default").slice(0, 2); //getting date number ex:17
    return currentDate + " " + currentMonth; //adding both date and month and returning
  };

  const userDataHandler = async (coinId) => {
    console.log(`${coinId} is this`);
    let pasDate = [];
    let pasPrice = [];
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=inr&days=10&interval=daily`;
    const { data } = await axios.get(url);
    for (let i = 0; i < data.prices.length - 1; i++) {
      const item = data.prices[i];
      const date = convertToDate(item[0]);
      pasDate.push(date);
      pasPrice.push(Math.floor(item[1]));
    }
    setChartData({
      labels: pasDate,
      datasets: [
        {
          label: "price",
          data: pasPrice,
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });

    setChartOptions({
      tension: 0.4,
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: `${coinId}`,
        },
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        lightModeHandler,
        lightMode,
        dataHandler,
        data,
        setPageNum,
        pageNum,
        userDataHandler,
        chartData,
        chartOptions,
        getCoinData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
