import React, { Component } from "react";
// import { ReactComponent as ForgeRock } from "../../../img/partner/forgerock.svg";
// import { ReactComponent as PingIdentity } from "../../../img/partner/ping-identity.svg";
import ForgeRock from "../../../img/forgerocktrust.png";
import { ReactComponent as PingIdentity } from "../../../img/ping-identity.svg";
import "./trust.css";
import { Row, Col } from "antd";

export default class trust extends Component {
  render() {
    return (
      <div className="trust-bg">
        <div className="trust-bg2">
          <div className="turst-title">We work with the Best Partners</div>
          <div className="turst-title2"></div>
          <div className="trust-grid-bg">
            <Row gutter={24}>
              <Col className="gutter-row" span={12}>
                <div className="trust-color-block">
                  <div className="trust-black-block">
                    <img src={ForgeRock} className="trust-forgerock" alt="" />
                    <div className="trust-color-block-title2">Established</div>
                    <div className="trust-color-block-title3">Partnership</div>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div className="trust-color-block">
                  <div className="trust-black-block">
                    <PingIdentity className="trust-ping" />
                    <div className="trust-color-block-title2">Established</div>
                    <div className="trust-color-block-title3">Partnership</div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
