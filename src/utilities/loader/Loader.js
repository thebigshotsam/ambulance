import React from "react";
import "./Loader.css";
const Loader = ({ show }) => {
  return (
    <>
      {show ? (
        <div className="loader">
          <div className="spinner" style={{ fontSize: "16px" }}>
            <div className="head"></div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loader;
