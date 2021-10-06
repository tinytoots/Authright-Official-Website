import React from "react";
import SubCertCard from "./subCertCard";
import "./certCard.css";

const CertCard = (props) => {
  const { name, content, color, pic } = props;
  return (
    <div
      className="certCard-container"
      style={{ borderTop: `5px solid ${color}` }}
    >
      <div className="certCard-title">{name}</div>
      <img src={pic} alt=''/>
      <div className="certCard-subList">
        {content.map((certInfo) => {
          const { certName, number } = certInfo;
          return <SubCertCard certName={certName} number={number} />;
        })}
      </div>
      <div className="certCard-certName">{}</div>
    </div>
  );
};

export default CertCard;
