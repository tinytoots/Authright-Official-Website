import React from "react";
import "./advisorCard.css";
import Linkedin from "../../../img/bluelinkedin.png";

export default function AdvisorCard(props) {
  const { name, title, company, description, linkRef, pic } = props.advisor;
  return (
    <div className="advisorCard-container">
      <img className="advisorCard-img" src={pic} alt="" />
      <div className="advisorCard-info">
        <div className="advisorCard-name">
          {name}
          <img
            className="advisor-linkedin"
            src={Linkedin}
            alt="advisor-linkedin"
            onClick={(e) => {
              e.stopPropagation();
              window.open(linkRef);
            }}
          />
        </div>
        <div className="advisorCard-title">
          {title}・{company}
        </div>
        <div className="advisorCard-description">{description}</div>
      </div>
    </div>
  );
}
