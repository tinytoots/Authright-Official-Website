import React from "react";
import { advisorsInfo as advisors } from "../../../constant/advisorsInfo";
import AdvisorCard from "./advisorCard";
import { leadInfo as leads } from "../../../constant/leadInfo";
import { leadInfo as leadsScond } from "../../../constant/leadInfoSecond";
import { leadInfo as boardDirect } from "../../../constant/BoardOfDirector1";
import LeadCard from "../advisors/leadCard";
import "./advisors.css";

export default function Advisoryboard(props) {
  return (
    <div className="advisor-bg">
      <div className="leader-title">Authright Founders</div>
      <div className="about-leadership-ceo1">
        <LeadCard leadInfo={leads} />
      </div>
      {/* <div className="leader-title">Co-Founder</div> */}
      <div className="about-leadership-ceo2">
        <LeadCard leadInfo={leadsScond} />
      </div>
      <div className="leader-title">Board of Directors</div>
      <div className="about-leadership-ceo1">
        <LeadCard leadInfo={boardDirect} />
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
