import React, { Component } from "react";
import "./business.css";
import BrandBox from "./brand-box/box";
import BrandCard from "./brand-card/card";
import ExpandCard from "./brand-expandCard/expandCard";
import UnderLine from "../../img/circle.svg";
import BrandTrust from "./brand-trust/trust";

export default class business extends Component {
  render() {
    return (
      <div className="business-bg">
        <div className="business-bg2">
          <div className="businessOutcome-intro">
            <div className="businessOutcome-title1">We save a lot of money</div>
            <div className="businessOutcome-title2">
              for many of the world's
            </div>
            <div className="businessOutcome-title2">top 500 companies</div>
            <img
              className="businessOutcome-underline-img"
              src={UnderLine}
              width={260}
            />
            <BrandBox />
          </div>
        </div>
        <div className="businessOutcome-card-bg">
          <div className="businessOutcome-card">
            <BrandCard />
          </div>
        </div>
        <BrandTrust />
      </div>
    );
  }
}
