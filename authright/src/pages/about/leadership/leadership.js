import React from "react";
import ExpandCard from "../expandCard/expandCard";
import { employeeInfo as employees } from "../../../constant/employeeInfo";
import { leadInfo as leads } from "../../../constant/leadInfo";
import LeadCard from "./leadCard";
import "./leadership.css";
import "antd/dist/antd.css";

export default function Leadership(props) {
  return (
    <div className="leadership-bg">
      <div className="inner">
        <div className="about-leadership-title">Our Team</div>
        <div className="about-leadership-content">
          We are a team. A great journey begins here.
        </div>
      </div>
      <div className="about-leadership-ceo">
        <LeadCard leadInfo={leads}/>
      </div>
      <div className="leadership-container">
        {employees.map((employee) => {
          const { name, title, linkedin, pic } = employee;
          return (
            <ExpandCard
              name={name}
              title={title}
              linkedin={linkedin}
              pic={pic}
            />
          );
        })}
      </div>

    </div>
  );
}
