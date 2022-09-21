import React from "react";
import { advisorsInfo as advisors } from "../../../constant/advisorsInfo";
import AdvisorCard from "./advisorCard";
import { leadInfo as leads } from "../../../constant/leadInfo";
import { leadInfo as leads2 } from "../../../constant/leadInfoSecond";
import LeadCard from "../advisors/leadCard";
import "./advisors.css";

export default function Advisoryboard(props) {
  return (
    <div className="advisor-bg">
      <div className="leader-title">Founder</div>
      <div className="about-leadership-ceo">
        <LeadCard leadInfo={leads} />
      </div>
      <div className="leader-title">Co-Founder</div>
      <div className="about-leadership-ceo">
        <LeadCard leadInfo={leads2} />
      </div>
      <div className="advisor-title">Advisory Board</div>
      <div className="advisor-container">
        {advisors.map((advisor) => {
          return <AdvisorCard key={advisor.name} advisor={advisor} />;
        })}
      </div>
    </div>
  );
}
