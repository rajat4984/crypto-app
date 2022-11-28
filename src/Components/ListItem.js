import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

function ListItem() {
  const { data, dataHandler, pageNum, getCoinData, lightMode } =
    useGlobalContext();

  useEffect(() => {
    dataHandler();
  }, [pageNum]);
  return (
    <div>
      <div className="list-heading">
        <div className="heading-icon">Icon</div>
        <div className="heading-symbol">Symbol</div>
        <div className="heading-name">Name</div>
        <div className="heading-current-price">Price</div>
        <div className="heading-high">Ath</div>
        <div className="heading-low">Atl</div>
      </div>
      {data.map(({ id, image, symbol, name, current_price, ath, atl }) => {
        return (
          <Link
            to="coinInfo"
            className={
              lightMode ? "dark-text list-item" : "light-text list-item"
            }
            key={id}
            onClick={() => getCoinData(id)}
          >
            <div className="icon">
              <img src={`${image}`}></img>
            </div>
            <div className="symbol">{symbol}</div>
            <div className="name">{name}</div>
            <div className="current-price">{`₹${parseFloat(current_price.toFixed(2))}.`}</div>
            <div className="high-price">{`₹${parseFloat(ath.toFixed(2))}`}</div>
            <div className="low-price">{`₹${parseFloat(atl.toFixed(2))}`}</div>
            <hr />
          </Link>
        );
      })}
    </div>
  );
}

export default ListItem;
