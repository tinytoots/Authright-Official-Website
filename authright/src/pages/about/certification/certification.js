import React from "react";
import { certificationInfo } from "../../../constant/certificationInfo";
import CertCard from "./certCard";
import "./certification.css";
const Certification = () => {
  return (
    <div className="certification-bg">
      <div className="certification-title">Certifications</div>
      <div className="certification-cards">
        {certificationInfo.map((certificate) => {
          const { name, content,color } = certificate;
          return <CertCard name={name} content={content} color={color}/>;
        })}
      </div>
    </div>
  );
};

export default Certification;
