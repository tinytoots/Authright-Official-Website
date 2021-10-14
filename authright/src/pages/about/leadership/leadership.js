import React from "react";
import ExpandCard from "../expandCard/expandCard";
import { employeeInfo as employees } from "../../../constant/employeeInfo";
import "./leadership.css";
import "antd/dist/antd.css";

export default function Leadership(props) {
  return (
    <div className="leadership-bg">
      <div className="about-leadership-title">Our Team</div>
      <div className="leadership-container">
        {employees.map((employee) => {
          const { name, title, linkedin, pic } = employee;
          return (
            <ExpandCard
              name={name}
              title={title}
              linkedin={linkedin}
              pic={pic}
              key={name+title}
            />
          );
        })}
      </div>
    </div>
  );
}
