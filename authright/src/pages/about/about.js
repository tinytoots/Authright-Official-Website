import React, { Component } from "react";
import "./about.css";
import Leadership from "./leadership/leadership";
import Advisoryboard from "./advisors/advisors"
import Intro from "./intro/intro";

export default class about extends Component {
  render() {
    return (
      <div>
        <div>
          <Intro />
          <div className="about-advisory">
              <Advisoryboard />
          </div>
          <div className="about-leadership">
            <div className="inner">
              <Leadership />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
