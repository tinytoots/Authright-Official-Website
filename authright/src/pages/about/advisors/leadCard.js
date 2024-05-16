import React from "react";
import "./leadCard.css";
import Linkedin from "../../../img/bluelinkedin.png";

export default function LeadCard(props) {
  const { name, title, linkedin, pic, description } = props.leadInfo;
  return (
    <div className="leadCard-container">
      <img className="leadCard-img" src={pic} alt="" />
      <div className="leadCard-info">
        <div className="leadCard-name">
          {name}
          <img
            className="leadCard-linkedin"
            src={Linkedin}
            alt="advisor-linkedin"
            onClick={(e) => {
              e.stopPropagation();
              window.open(linkedin);
            }}
          />
        </div>
        <div className="leadCard-title">
          {title}
        </div>
        <div className="leadCard-description">{description[0]}</div>
        <div className="leadCard-description">{description[1]}</div>
        <div className="leadCard-description">{description[2]}</div>
        <div className="leadCard-description">{description[3]}</div>
      </div>
    </div>
  );
}
