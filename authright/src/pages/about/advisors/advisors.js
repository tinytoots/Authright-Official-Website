import React from "react";
import { advisorsInfo as advisors } from "../../../constant/advisorsInfo";
import AdvisorCard from "./advisorCard";
import "./advisors.css";

export default function Advisoryboard(props) {
  return (
    <div className="advisor-bg">
      <div className="advisor-title">Advisory Board</div>
      {advisors.map((advisor) => {
        return <AdvisorCard advisor={advisor} />;
      })}
    </div>
  );
}
