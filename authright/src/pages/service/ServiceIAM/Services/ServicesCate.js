import React, { Component } from "react";
import "./ServicesCate.css";
import { Row, Col } from "antd";
import Consulting from "../../../../img/consulting.svg";
import Design from "../../../../img/design.svg";
import Integration from "../../../../img/Integration.svg";
import Support from "../../../../img/support.svg";

export default class Forgerock extends Component {
  render() {
    return (
      <div className="IAM-bg">
        <div className="service-title">Our Services</div>
        <div className="IAM-grid-bg">
          <Row gutter={[10, 10]} justify="center">
            <Col className="gutter-row">
              <div className="service-card">
                <div className="forgerock-title">
                  <img
                    className="service-card-support-img"
                    src={Support}
                    width={85}
                    alt=""
                  />
                  <div className="service-card-title">
                    Implementation {"&"} Integration
                  </div>
                  <div className="servicesCate-content4">
                    Our team will review your business requirements and find the
                    best plan tailored for you. We are seasoned experts. We know
                    what to plan for and how to execute.
                  </div>
                  {/* <NavLink to="/services/iam/professional-services">
                                        <div>
                                            <div className='company-title' style={{fontSize: 18, marginTop: 30}}>
                                                Learn More {">"}
                                            </div>
                                        </div>
                                    </NavLink> */}
                </div>
              </div>
            </Col>
            <Col className="gutter-row">
              <div className="service-card">
                <div className="forgerock-title">
                  <img
                    className="service-card-support-img"
                    src={Design}
                    width={82}
                    alt=""
                  />
                  <div className="service-card-title">Managed Services</div>
                  <div
                    className="servicesCate-content4"
                    style={{ marginTop: 14 }}
                  >
                    We will improve your operations and cut expenses by
                    maintaining, supporting, and monitoring your identity
                    management solutions. Let our experts take care of your IAM
                    services and eliminate the issue before they arise, and you
                    can focus on your core business.
                  </div>
                  {/* <NavLink to="/services/iam/managed-services">
                                        <div>
                                            <div className='company-title' style={{fontSize: 18, marginTop: 30}}>
                                                Learn More {">"}
                                            </div>
                                        </div>
                                    </NavLink> */}
                </div>
              </div>
            </Col>
            <Col className="gutter-row">
              <div className="service-card">
                <div className="forgerock-title">
                  <img
                    className="service-integration-card-img"
                    src={Integration}
                    width={131}
                    // height={85}
                    alt=""
                  />
                  <div className="service-card-title">Advisory Services</div>
                  <div className="servicesCate-content4">
                    Our team has done numerous identity implementations across
                    every industry. We’ve seen so many identity use cases and
                    nuances with regards to digital transformation and cloud
                    migration. We will get you ready for the customer demands
                    and potential challenges in the future.
                  </div>
                  {/* <NavLink to="/services/iam/education-services">
                                        <div>
                                            <div className='company-title' style={{fontSize: 18, marginTop: 30}}>
                                                Learn More {">"}
                                            </div>
                                        </div>
                                    </NavLink> */}
                </div>
              </div>
            </Col>
            <Col className="gutter-row">
              <div className="service-card">
                <div className="forgerock-title">
                  <img
                    className="service-card-support-img"
                    src={Consulting}
                    width={85}
                    // height={85}
                    alt=""
                  />
                  <div className="service-card-title">Education Services</div>
                  <div className="servicesCate-content4">
                    Our instructors have hands-on experience in architecting and
                    implementing identity management products of different
                    vendors. We can effectively level up your team’s IAM
                    knowledge and skills.
                  </div>
                  {/* <NavLink to="/services/iam/strategic-talent-services">
                                        <div>
                                            <div className='company-title' style={{fontSize: 18, marginTop: 30}}>
                                                Learn More {">"}
                                            </div>
                                        </div>
                                    </NavLink> */}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
