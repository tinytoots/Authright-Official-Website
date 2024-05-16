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
        <div className="service-title">Our Comprehensive Services and Tailored Solutions for Your Success</div>
        <div className="IAM-grid-bg">
          <Row gutter={[0, 10]} justify="center">
            <Col className="gutter-row">
              <div className="service-card">
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
                    Trust our seasoned experts to analyze your needs thoroughly and craft a tailored plan for success. With our wealth of experience, we execute flawlessly from start to finish.
                  </div>
                  {/* <NavLink to="/services/iam/professional-services">
                                        <div>
                                            <div className='company-title' style={{fontSize: 18, marginTop: 30}}>
                                                Learn More {">"}
                                            </div>
                                        </div>
                                    </NavLink> */}
              </div>
            </Col>
            <Col className="gutter-row">
              <div className="service-card">
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
                    Maximize efficiency and slash costs with our expertly managed identity management solutions. Our proactive approach eliminates issues before they arise, freeing you to focus on your core business. Trust us to optimize your IAM services and propel your success.
                  </div>
                  {/* <NavLink to="/services/iam/managed-services">
                                        <div>
                                            <div className='company-title' style={{fontSize: 18, marginTop: 30}}>
                                                Learn More {">"}
                                            </div>
                                        </div>
                                    </NavLink> */}
              </div>
            </Col>
            <Col className="gutter-row">
              <div className="service-card">
                  <img
                    className="service-integration-card-img"
                    src={Integration}
                    width={131}
                    // height={85}
                    alt=""
                  />
                  <div className="service-card-title">Consulting Solutions</div>
                  <div className="servicesCate-content4">
                    Our team has executed countless identity implementations across industries, witnessing myriad use cases and nuances in digital transformation and cloud migration. We're poised to prepare you for future customer demands and challenges.
                  </div>
                  {/* <NavLink to="/services/iam/education-services">
                                        <div>
                                            <div className='company-title' style={{fontSize: 18, marginTop: 30}}>
                                                Learn More {">"}
                                            </div>
                                        </div>
                                    </NavLink> */}
              </div>
            </Col>
            <Col className="gutter-row">
              <div className="service-card">
                  <img
                    className="service-card-support-img"
                    src={Consulting}
                    width={85}
                    // height={85}
                    alt=""
                  />
                  <div className="service-card-title">Authright Academy</div>
                  <div className="servicesCate-content4">
                  Our instructors possess hands-on expertise in architecting and implementing identity management products from various vendors. Let us elevate your team's IAM knowledge and skills effectively.
                  </div>
                  {/* <NavLink to="/services/iam/strategic-talent-services">
                                        <div>
                                            <div className='company-title' style={{fontSize: 18, marginTop: 30}}>
                                                Learn More {">"}
                                            </div>
                                        </div>
                                    </NavLink> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
