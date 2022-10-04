import React from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { useGlobalContext } from "../context";

function PageNumber() {
  const { pageNum, setPageNum } = useGlobalContext();
  return (
    <div>
      <div className="page-number-container">
        <a href="#nav">
          <button
            className="prev-page-btn"
            onClick={() => {
              pageNum === 0 ? setPageNum(1) : setPageNum(pageNum - 1);
            }}
          >
            <GrCaretPrevious />
          </button>
        </a>
        <div className="page-number">{pageNum}</div>
        <a href="#nav">
          <button
            className="next-page-btn"
            onClick={() => setPageNum(pageNum + 1)}
          >
            <GrCaretNext />
          </button>
        </a>
      </div>
    </div>
  );
}

export default PageNumber;
