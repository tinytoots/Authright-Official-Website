import React, { Component } from "react";
import "./business.css";
//import BrandBox from "./brand-box/box";
import BrandCard from "./brand-card/card";
//import ExpandCard from "./brand-expandCard/expandCard";
import UnderLine from "../../img/circle.svg";
import BrandTrust from "./brand-trust/trust";
// import Blue_Cross from "../../img/blue-cross-blue-shield-1.svg";
// import HSBC from "../../img/hsbc-1.svg";
// import Deloitte from "../../img/deloitte-2.svg";
// import Toyota from "../../img/toyota-1.svg";
// import HomeDepot from "../../img/the-home-depot.svg";
// import Equifax from "../../img/equifax.svg";
// import Mohawk from "../../img/mohawk-industries-logo.svg";
// import Lowes from "../../img/lowe-s-5.svg";
// import Pearson from "../../img/pearson-logo.svg";

import { customerLogo } from "../../img/customerLogo";

export default class business extends Component {
  render() {
    return (
      <div className="business-bg">
        <div className="business-bg2">
          <div className="businessOutcome-intro">
            <div className="businessOutcome-title1">We are trusted by</div>
            <div className="businessOutcome-title2">Fortune 500</div>
            <div className="businessOutcome-title2">companies</div>
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
        {/* <div className="businessOutcome-card-bg">
          <div className="businessOutcome-card">
            <BrandCard />
          </div>
        </div> */}
        {/* <BrandTrust /> */}
      </div>
    );
  }
}
