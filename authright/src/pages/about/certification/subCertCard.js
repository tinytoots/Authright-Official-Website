import React from "react";
import "./subCerdCard.css";

const SubCertCard = (props) => {
  const { certName, number } = props;
  return (
    <div>
      <div className="subCertCard-number">{number}</div>
      <div className="subCertCard-certName">{certName}</div>
    </div>
  );
};

export default SubCertCard;
