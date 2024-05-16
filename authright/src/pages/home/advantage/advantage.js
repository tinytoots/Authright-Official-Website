import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./advantage.css";

export default class advantage extends Component {
  render() {
    return (
      <div className="adv-bg">
        <div className="advantage-title">
          Cutting-Edge Solutions: Unparalleled Quality, Lightning-Fast Development, Tailored Just for You
        </div>
        <div className="advantage-content">
          Whether you're aiming to seamlessly integrate IAM into your existing system or seeking a top-notch development team to bring your ideas to life, count on us for dependable technical services that guarantee success.
        </div>
        <NavLink to="/services/iam">
          <div className="advantage-learnmore">
            Learn more {">"}
            <i className="approw-arrow-down-line arrow"></i>
          </div>
        </NavLink>
      </div>
    );
  }
}
