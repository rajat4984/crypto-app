import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

function LineChart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

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
    const currentMonth = months[currentMonthNum];    //getting month from array
    const currentDate = date.toLocaleDateString("default").slice(0, 2);    //getting date number ex:17
    return currentDate + " " + currentMonth;     //adding both date and month and returning
  };

  const userDataHandler = async () => {
    let pasDate = [];
    let pasPrice = [];
    const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=10&interval=daily`;
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
          text: "Bitcoin",
        },
      },
    });
  };

  useEffect(() => {
    userDataHandler();
  }, []);

  return (
    <div style={{ width: "70%" }}>
      <Line options={chartOptions} data={chartData} />
    </div>
  );
}

export default LineChart;
