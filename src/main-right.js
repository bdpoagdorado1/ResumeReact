import React from "react";
import Experience from "./right/experience";
import References from "./right/references";

function MainRight() {
  return (
    <div className="right-side">
      <div className="inner-right-side">
        <Experience />
        <References />
      </div>
      <span>
        <a className="footer-link" href="#">
          Download PDF
        </a>
      </span>
    </div>
  );
}

export default MainRight;
