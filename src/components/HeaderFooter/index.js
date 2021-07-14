import React from "react";
import "./index.css";

import { linkedin } from "../../Source/index";

/* DESC: for the navBar and footer 
   render by : props.children 
*/

function HeaderFooter(props) {
  return (
    <div>
      {/* Header */}
      <div className="header">
        <nav>
          <p className="NavStyle isActive"> Home</p>
          <p className="NavStyle"> ReactJS</p>
          <p className="NavStyle"> NodeJS</p>
          <p className="NavStyle"> JavaScript</p>
          <p className="NavStyle"> MongoDB</p>
          <p className="NavStyle"> CSS</p>
        </nav>

        <div className="NavSocial">
          <p className="txt">soumityachauhan@gmail.com</p>

          <p className="txt">+91 9932317334</p>
          <img src={linkedin} style={{ height: "30px", width: "30px" }} />
        </div>
      </div>

      <div className="body">
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
        <h1 style={{ color: "#fff" }}>hello</h1>
      </div>

      <div className="footer-container">footer</div>
    </div>
  );
}

export default HeaderFooter;

{
  /* <div className="footer">
        <div className="item1">
          <h4>SOUMITYA CHAUHAN</h4>
          <h6 style={{ marginTop: "2%" }}>soumityachauhan@gmail.com</h6>
          <h6 style={{ marginTop: "2%" }}>9547147881</h6>
        </div>
        <div className="item2">S</div> <div className="item3">S</div>
      </div> */
}
