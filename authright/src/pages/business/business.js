import React, { Component } from "react";
import "./business.css";
import UnderLine from "../../img/circle.svg";
import { customerLogo } from "../../img/customerLogo";

export default class business extends Component {
  render() {
    return (
      <div className="business-bg2">
        <div className="businessOutcome-intro">
          {/* <div className="businessOutcome-title1">We are Trusted by</div> */}
          <div className="businessOutcome-title2">Fortune 500 Companies Trust Us!</div>
          {/* <div className="businessOutcome-title2">companies</div> */}
          <img
            className="businessOutcome-underline-img"
            src={UnderLine}
            width={180}
            alt=""
          />
          {/* <BrandBox /> */}
          <div className="customer-logo-list">
            {customerLogo.map((logo) => {
              return <div className="customer-logo">{logo}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
