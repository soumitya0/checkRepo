import React, { useEffect } from "react";
import "./Card.css";
import Styled from "styled-components";

import {
  icon_brand_recognition,
  icon_fully_customizable,
  icon_detailed_records,
} from "../Source/index";
function Card(props) {
  const styleBg = {
    backgroundImage:
      "url(" + process.env.PUBLIC_URL + `/images/${props.urlName}.svg` + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "50% 50%",
    backgroundPosition: "center",
  };

  //   let styleContainer = null;

  let styleContainer = {
    transform: `translateY(${props.moveY})`,
    // marginLeft: `${props.moveX}`,
  };
  //   if (window.innerWidth > 720) {
  //     styleContainer = {
  //       transform: `translateY(${props.moveY})`,
  //       marginLeft: `${props.moveX}`,
  //     };
  //   } else {
  //     styleContainer = {
  //       transform: `translateY(${props.moveY})`,
  //     };
  //   }

  useEffect(() => {
    console.log("hey");
  }, [window.innerWidth > 720]);

  return (
    <div className="Card-container" style={styleContainer}>
      <div className="Card-img" style={styleBg}></div>
      <div className="Card-txt">
        <h4>{props.title}</h4>
        <p style={{ fontSize: "14px", marginTop: "10px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Loremdummy
        </p>
      </div>
    </div>
  );
}

export default Card;
