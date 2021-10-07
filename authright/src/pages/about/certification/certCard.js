import React from "react";
import SubCertCard from "./subCertCard";
import "./certCard.css";

const CertCard = (props) => {
  const { name, content, pic } = props;
  console.log(pic);
  return (
    <div className="certCard-container">
      <div className="certCard-header">
        {/* <img className="certCard-img" src={pic} alt={`${name}`} /> */}
        <div className="certCard-title" style={{ borderBottom: `3px solid #8c8c8c` }}>
          {name}
        </div>
        <div className="certCard-divider"></div>
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
