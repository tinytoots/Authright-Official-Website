import React from "react";
import "./certCard.css";

const CertCard = (props) => {
  const { name, content,color } = props;
  return (
    <div className="certCard-container" style={{borderTop:`3px solid ${color}`}}>
      <div className="certCard-title">{name}</div>
      {content.map((certInfo) => {
        const { certName, number } = certInfo;
        return <div>{`${certName} : ${number}`}</div>;
      })}
      <div className="certCard-certName">{}</div>
    </div>
  );
};

export default CertCard;
