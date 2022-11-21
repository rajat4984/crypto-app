import React from "react";
import { useGlobalContext } from "../../context";

function CoinInfo() {
  const { coinInfo } = useGlobalContext();

  return (
    <div>
      <div className="coin-info">
        <div className="coin-desc">
          <p className="description">{coinInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default CoinInfo;
