import React from "react";
import SubCertCard from "./subCertCard";
import "./certCard.css";

const CertCard = (props) => {
  const { name, content, color, pic } = props;
  console.log(pic);
  return (
    <div className="certCard-container">
      <div className="certCard-header">
        {/* <img className="certCard-img" src={pic} alt={`${name}`} /> */}
        <div className="certCard-title">{name}</div>
        <div className="certCard-divider" style={{ borderBottom: `5px solid ${color}` }}></div>
      </div>

      <div className="certCard-subList">
        {content.map((certInfo) => {
          const { certName, number, pic } = certInfo;
          return (
            <SubCertCard
              key={`${certName}+${number}`}
              certName={certName}
              number={number}
              pic={pic}
            />
          );
        })}
      </div>
      <div className="certCard-certName">{}</div>
    </div>
  );
};

export default CertCard;
