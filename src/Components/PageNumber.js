import React from "react";
import { useGlobalContext } from "../context";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

function PageNumber() {
  const { pageNum, setPageNum, lightMode } = useGlobalContext();
  const darkModeStyle = { color: "#f4f5f6", fontSize: "1.7em" };
  const lightModeStyle = { color: "black", fontSize: "1.7em" };
  return (
    <div>
      <div className="page-number-container">
        <a href="#nav">
          <button
            className="prev-page-btn"
            onClick={() => {
              pageNum === 1 ? setPageNum(1) : setPageNum(pageNum - 1);
            }}
          >
            <MdOutlineNavigateBefore
              style={lightMode == true ? lightModeStyle : darkModeStyle}
            />
          </button>
        </a>
        <div className="page-number">{pageNum}</div>
        <a href="#nav">
          <button
            className="next-page-btn"
            onClick={() => setPageNum(pageNum + 1)}
          >
            <MdOutlineNavigateNext
              style={lightMode == true ? lightModeStyle : darkModeStyle}
            />
          </button>
        </a>
      </div>
    </div>
  );
}

export default PageNumber;
