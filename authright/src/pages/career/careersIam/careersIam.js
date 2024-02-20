import React, { Component } from "react";
import { Row, Col } from "antd";
// import IAMImg from '../../../img/careers-img2.jpg'
// import IAMImg from "../../../img/hiring.jpg";
import "./careersIam.css";

export default class careersIam extends Component {
  render() {
    return (
      <div className="solution-IAM-bg">
        <div className="solution-IAM-Intro-bg">
          <div className="careers-title">Work With Us</div>
          <div className="solution-gray-lane2" />
          <div className="forgerock-conent-bg">
            <Row gutter={16}>
              <Col className="gutter-row" span={16}>
                <div className="careers-position-title">Position</div>
              </Col>
              {/* <Col className="gutter-row" span={8}>
                <div className="careers-position-title">Team</div>
              </Col> */}
              <div className="careers-gray-lane" />
              <Col className="gutter-row" span={16}>
                <a
                  className="unifiedcontrol-card-default"
                  href="/careers/detail/assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="unifiedcontrol-card-title2">
                    Full-time Executive Assistant
                    <i className="approw-arrow-down-line arrow"></i>
                  </div>
                </a>
              </Col>
              {/* <Col className="gutter-row" span={8}>
                <div className="solution-forgerock-intro">IAM</div>
              </Col> */}
              <div className="careers-gray-lane" />
              <Col className="gutter-row" span={16}>
                <a
                  className="unifiedcontrol-card-default"
                  href="/careers/detail/iamConsultant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="unifiedcontrol-card-title2">
                    Identity and Access Management (IAM) Consultant - Hybrid
                    <i className="approw-arrow-down-line arrow"></i>
                  </div>
                </a>
              </Col>
              {/* <Col className="gutter-row" span={8}>
                <div className="solution-forgerock-intro">IAM</div>
              </Col> */}
              <div className="careers-gray-lane" />
              <Col className="gutter-row" span={16}>
                <a
                  className="unifiedcontrol-card-default"
                  href="/careers/detail/sales"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="unifiedcontrol-card-title2">
                    Full-time Identity and Access Management (IAM) Sales
                    <i className="approw-arrow-down-line arrow"></i>
                  </div>
                </a>
              </Col>
              {/* <Col className="gutter-row" span={8}>
                <div className="solution-forgerock-intro">IAM</div>
              </Col> */}
              <div className="careers-gray-lane" />
              <Col className="gutter-row" span={16}>
                <a
                  className="unifiedcontrol-card-default"
                  href="/careers/detail/hr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="unifiedcontrol-card-title2">
                  Full-time Accounting and Human Resources Manager
                    <i className="approw-arrow-down-line arrow"></i>
                  </div>
                </a>
              </Col>
              {/* <Col className="gutter-row" span={8}>
                <div className="solution-forgerock-intro">IAM</div>
              </Col> */}
              <div className="careers-gray-lane" />
              <div className="careers-gray-lane" />
              <Col className="gutter-row" span={16}>
                <a
                  className="unifiedcontrol-card-default"
                  href="/careers/detail/intern"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="unifiedcontrol-card-title2">
                  Identity and Access Management (IAM) Intern
                    <i className="approw-arrow-down-line arrow"></i>
                  </div>
                </a>
              </Col>
              {/* <Col className="gutter-row" span={8}>
                <div className="solution-forgerock-intro">IAM</div>
              </Col> */}
              <div className="careers-gray-lane" />
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
