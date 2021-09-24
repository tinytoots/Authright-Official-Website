import React from "react";
//import BostonImg from "../../../img/employee/Le.JPG";
import Linkedin from "../../../img/bluelinkedin.png";
import "./expandCard.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);

export default function expandCard(props) {
  const name = props.name,
    title = props.title,
    linkedin = props.linkedin,
    pic = props.pic;
  return (
    <div className="employee-card">
      {/* <img className="employee-pic" src={BostonImg} height={240} alt="" /> */}
      <img className="employee-pic" src={pic} height={200} width={200} alt="" />

      <div className="employee-info">
        <span className="employee-name">{name}</span>
        
        <br />
        <span className="employee-title">{title}</span><br/>
        <img
          className="employee-linkedin"
          src={Linkedin}
          height={23}
          alt="employee-linkedin"
          onClick={(e) => {
            e.stopPropagation();
            window.open(linkedin);
          }}
        />
        {/* <button className="employee-btn">See more info</button> */}
      </div>
    </div>
  );
}
