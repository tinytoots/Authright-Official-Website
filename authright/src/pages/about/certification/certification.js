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
          const { name, content, color, pic } = certificate;
          return (
            <CertCard
              key={`${name}+${color}`}
              name={name}
              content={content}
              color={color}
              pic={pic}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Certification;
