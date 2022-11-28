import React from "react";
import { useNavigate } from "react-router";
import { Line } from "react-chartjs-2";
import { useGlobalContext } from "../../context";
import { ImCross } from "react-icons/im";
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
  const {
    setCoinName,
    setCoinInfo,
    setChartData,
    setChartOptions,
    chartData,
    chartOptions,
  } = useGlobalContext();

  const navigate = useNavigate();

  const goPrevPage = () => {
    navigate(-1);
    setCoinName("");
    setCoinInfo("");
    setChartData({
      datasets: [],
    });
    setChartOptions({});
  };

  return (
    <div className="line-cross-container">
      <ImCross onClick={goPrevPage} className="cross-icon" />
      <div className="linechart-container">
        <Line options={chartOptions} data={chartData} className="line-chart" />
      </div>
    </div>
  );
}

export default LineChart;
