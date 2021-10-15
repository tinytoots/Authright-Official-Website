import React from "react";
import "./advisorCard.css";
import { useMediaQuery } from "react-responsive";
import Linkedin from "../../../img/bluelinkedin.png";

export default function AdvisorCard(props) {
  const { name, title, company, description, linkRef, pic } = props.advisor;
  const isMobile = useMediaQuery({ query: "(max-width: 400px)" });
  const space = <br />;

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
          {isMobile ? `${title}` : `${title} - ${company}`}
        </div>
        <div className="advisorCard-title">
          {isMobile ? `${company}`:``}
        </div>
        
        <div className="advisorCard-description">{description}</div>
      </div>
    </div>
  );
}
