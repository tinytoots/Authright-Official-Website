import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import { ReactComponent as ForgeRock } from "../../../img/partner/forgerock.svg";
// import { ReactComponent as PingIdentity } from "../../../img/partner/ping-identity.svg";
import ForgeRock from "../../../img/forgerocktrust.png";
import { ReactComponent as PingIdentity } from "../../../img/ping-identity.svg";
import "./trust.css";
import { Row, Col, Divider } from "antd";

const style = { background: "#0092ff", padding: "8px 0" };

export default class trust extends Component {
  render() {
    return (
      <div className="trust-bg">
        <div className="trust-bg2">
          <div className="turst-title">We Work With the Best Partners</div>
          <div className="turst-title2"></div>
          <div className="trust-grid-bg">
            <Row gutter={24}>
              <Col className="gutter-row" span={12}>
                <div className="trust-color-block">
                  <div className="trust-black-block">
                    <img src={ForgeRock} className="trust-forgerock" alt=''/>
                    {/* <img src={forgerock} alt='' width="10"/> */}
                    {/* <div className="trust-color-block-title">2018</div> */}
                    <div className="trust-color-block-title2">Established</div>
                    <div className="trust-color-block-title3">Partnership</div>
                    {/* <div className="trust-color-block-served">since 2018</div> */}
                    {/* <a
                      className="unifiedcontrol-card-default"
                      href="https://www.forgerock.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="unifiedcontrol-card-title">
                        <div className="trust-color-block-served2">
                          ForgeRock
                        </div>
                        <i className="approw-arrow-down-line arrow"></i>
                      </div>
                    </a> */}
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div className="trust-color-block">
                  <div className="trust-black-block">
                    <PingIdentity className="trust-ping" />
                    {/* <div className="trust-color-block-title">2021</div> */}
                    <div className="trust-color-block-title2">Established</div>
                    <div className="trust-color-block-title3">Partnership</div>
                    {/* <div className="trust-color-block-served">since 2021</div> */}
                    {/* <a
                      className="unifiedcontrol-card-default"
                      href="https://www.pingidentity.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="unifiedcontrol-card-title">
                        <div className="trust-color-block-served2">
                          Ping Identity
                        </div>
                        <i className="approw-arrow-down-line arrow"></i>
                      </div>
                    </a> */}
                  </div>
                </div>
              </Col>
              {/* <Col className="gutter-row" span={8}>
                <div className="trust-color-block">
                  <div className="trust-black-block">
                    <div className="trust-color-block-title">More than</div>
                    <div className="trust-color-block-title4">1000000</div>
                    <div className="trust-color-block-title3">users</div>
                    <div className="trust-color-block-served">served by</div>
                    <NavLink to="/home">
                      <div className="unifiedcontrol-card-title">
                        <div className="trust-color-block-served2">
                          Authright
                        </div>
                        <i className="approw-arrow-down-line arrow"></i>
                      </div>
                    </NavLink>
                  </div>
                </div>
                }
              </Col> */}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
