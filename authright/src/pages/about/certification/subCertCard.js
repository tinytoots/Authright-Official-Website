import React from "react";
import "./subCerdCard.css";

const SubCertCard = (props) => {
  const { certName, number, pic } = props;
  return (
    <div>
      <div className="subCertCard-number">{number}</div>
      <img className="subCertCard-img" src={pic} alt={`${certName}`} />
      <div className="subCertCard-certName">{certName}</div>
    </div>
  );
};

export default SubCertCard;
