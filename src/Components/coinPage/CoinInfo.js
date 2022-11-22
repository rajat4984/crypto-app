import React from "react";
import { useGlobalContext } from "../../context";

function CoinInfo() {
  const { coinInfo, coinName } = useGlobalContext();

  return (
    <div>
      <div className="coin-info">
        <div className="coin-heading">
          <h1>{coinName}</h1>
        </div>
        <div className="coin-desc">
          <p className="description">{coinInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default CoinInfo;
