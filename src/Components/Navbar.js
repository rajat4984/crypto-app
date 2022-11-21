import React from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useGlobalContext } from "../context";

function Navbar() {
  const { lightModeHandler, lightMode } = useGlobalContext();
  return (
    <nav>
      <div className="navbar" id="nav">
        <div>
          <a href="/" className="brand">
            KryptoMart
          </a>
        </div>
        <div className="preview">
          <button
            href="cart"
            className="preview-link dark-btn"
            onClick={lightModeHandler}
          >
            {lightMode ? <BsFillMoonFill /> : <BsSunFill />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
