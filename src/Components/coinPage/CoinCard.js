import React from "react";
import CoinInfo from "./CoinInfo";
import LineChart from "./LineChart";
function CoinCard() {
  return (
    <div>
      <div className="coincard-container">
        <div className="coincard">
          <div className="coin-info-container">
            <CoinInfo />
          </div>
          <div className="linechart-container">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinCard;
