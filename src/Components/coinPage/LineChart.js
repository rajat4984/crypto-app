import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useGlobalContext } from "../../context";
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
  const { lightMode,userDataHandler,chartData,chartOptions } = useGlobalContext();

  // useEffect(() => {
  //   userDataHandler();
  // }, []);

  return (
    <div style={{width:"600px"}}>
      <Line options={chartOptions} data={chartData}  />
    </div>
  );
}

export default LineChart;
