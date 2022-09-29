import React from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

function PageNumber() {
  return (
    <div>
      <div className="page-number-container">
        <button className="prev-page-btn">
          <GrCaretPrevious />
        </button>
        <div className="page-number">1</div>
        <button className="next-page-btn">
          <GrCaretNext />
        </button>
      </div>
    </div>
  );
}

export default PageNumber;
