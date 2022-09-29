import React from "react";
import { useGlobalContext } from "../context";
import ListItem from "./ListItem";

function List() {
  // const { dataHandler } = useGlobalContext();
  // const data = dataHandler();


  return (
    <div>
      {console.log()}
      <div className="list-container">
        <ListItem />
      </div>
    </div>
  );
}

export default List;
