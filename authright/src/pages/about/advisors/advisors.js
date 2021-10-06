import React from "react";
import { advisorsInfo as advisors } from "../../../constant/advisorsInfo";
import AdvisorCard from "./advisorCard";
import { leadInfo as leads } from "../../../constant/leadInfo";
import LeadCard from "../advisors/leadCard";
import "./advisors.css";

export default function Advisoryboard(props) {
  return (
    <div className="advisor-bg">
      <div className="leader-title">Founder</div>
      <div className="about-leadership-ceo">
        <LeadCard leadInfo={leads} />
      </div>
      <div className="advisor-title">Advisory Board</div>
      {advisors.map((advisor) => {
        return <AdvisorCard key={advisor.name} advisor={advisor} />;
      })}
    </div>
  );
}
