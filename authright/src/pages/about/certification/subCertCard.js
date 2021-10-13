import React from "react";
import "./subCerdCard.css";

const SubCertCard = (props) => {
  const { certName, number, pic, link, name } = props;
  const imgClassName = (name === "Okta"
    ? "subCertCard-okta-img"
    : "subCertCard-img");
  return (
    <div>
      <div className="subCertCard-number">{number}</div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className={imgClassName} src={pic} alt={`${certName}`} />
      </a>

      <div className="subCertCard-certName">{certName}</div>
    </div>
  );
};

export default SubCertCard;
