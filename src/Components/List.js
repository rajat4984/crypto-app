import React from "react";

import ListItem from "./ListItem";

function List() {
  return (
    <div>
      <div className="main-heading">
        <h1>Coins</h1>
      </div>
      <div className="list-container">
        <ListItem />
      </div>
    </div>
  );
}

export default List;
