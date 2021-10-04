import React, { Component } from "react";
import "./about.css";
import Leadership from "./leadership/leadership";
import Advisoryboard from "./advisors/advisors"
import Intro from "./intro/intro";
import Certification from './certification/certification'

export default class about extends Component {
  render() {
    return (
      <div className="about-layout-bg">
          <Intro />
          <div className="about-advisory">
              <Advisoryboard />
          </div>
          <div className="about-leadership">
            <div className="inner">
              <Leadership />
            </div>
          </div>
          <div className="about-certification">
            <Certification />
          </div> 
      </div>
    );
  }
}
