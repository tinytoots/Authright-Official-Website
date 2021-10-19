import React, { Component } from "react";
import "./career.css";
import IAM from "./careersIam/careersIam";

export default class career extends Component {
  render() {
    return (
      <div>
        <div className="career-bg">
          <div className="inner">
            <IAM />
          </div>
        </div>
      </div>
    );
  }
}
