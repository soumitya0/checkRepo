import React from "react";
import "./index.css";
import { bg_shorten_desktop } from "../Source/index";
import Card from "../Card/Card";

import {
  icon_brand_recognition,
  icon_fully_customizable,
  icon_detailed_records,
} from "../Source/index";

function SearchComp() {
  const styleBg = {
    backgroundImage: `url("${bg_shorten_desktop}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  };

  return (
    <div>
      <div className="SearchComp-container" style={styleBg}>
        <input
          type="text"
          className="Search"
          placeholder="Shoten a link here"
        />
        <button className="btn">shorten It!</button>
      </div>

      <div className="Item2-container">
        <div className="Item2-Main">
          <div className="title">
            <h1 className="heading">Advanced Statistics</h1>
            <p style={{ marginTop: "10px", textAlign: "center" }}>
              Track how your links are performing across the web with our
              advanced Statistics dashboard
            </p>
          </div>
        </div>
        <div className="Item2-Body">
          <Card
            urlName="icon-brand-recognition"
            title="Band Recognition"
            moveY="50px"
          />
          <Card
            urlName="icon-detailed-records"
            title="Detailed Record"
            moveY="100px"
          />

          <Card
            urlName="icon-fully-customizable"
            title="Fully Customizable"
            moveY="150px"
          />
        </div>
      </div>
    </div>
  );
}

{
  /* <h1 className="centerTxt_H">Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            Statistics dashboard
          </p> */
}
export default SearchComp;
