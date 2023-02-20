import React from "react";
import "./loader.css";

export default function Loader() {
  return (
    <>
      {/* <div id="cws_page_loader_container" className="cws_loader_container">
        <div id="cws_page_loader" className="cws_loader">
          <div className="inner"></div>
        </div>
      </div> */}
      <div className="loading">
        <div className="preloader">
          <div className="spinner"></div>
          <div className="spinner-2"></div>
        </div>
      </div>
    </>
  );
}
