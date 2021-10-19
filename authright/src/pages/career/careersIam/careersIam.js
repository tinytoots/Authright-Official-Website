import React, { Component } from "react";
import { Row, Col } from "antd";
// import IAMImg from '../../../img/careers-img2.jpg'
import IAMImg from "../../../img/hiring.jpg";
import "./careersIam.css";

export default class careersIam extends Component {
  render() {
    return (
      <div className="solution-IAM-bg">
        <div className="solution-IAM-Intro-bg">
          <div className="careers-title">Security Engineer</div>
          <div className="solution-gray-lane2" />
          <div className="forgerock-conent-bg">
            <Row gutter={16}>
              <Col className="gutter-row" span={16}>
                <div className="careers-position-title">Position</div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="careers-position-title">Team</div>
              </Col>
              <div className="solution-gray-lane" />
              <Col className="gutter-row" span={16}>
                <a
                  className="unifiedcontrol-card-default"
                  href="/careers/detail/iam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="unifiedcontrol-card-title2">
                    Identity & Access Management Software Engineer (All Levels)
                    <i className="approw-arrow-down-line arrow"></i>
                  </div>
                </a>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="solution-forgerock-intro">IAM</div>
              </Col>
              <div className="solution-gray-lane" />
              <Col className="gutter-row" span={16}>
                <a
                  className="unifiedcontrol-card-default"
                  href="/careers/detail/forgerock"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="unifiedcontrol-card-title2">
                    ForgeRock (IAM) Identity Technical Architect
                    <i className="approw-arrow-down-line arrow"></i>
                  </div>
                </a>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="solution-forgerock-intro">IAM</div>
              </Col>
              <div className="solution-gray-lane" />
              <Col className="gutter-row" span={16}>
                <a
                  className="unifiedcontrol-card-default"
                  href="/careers/detail/ping"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="unifiedcontrol-card-title2">
                    Ping Identity (IAM) Identity Technical Architect
                    <i className="approw-arrow-down-line arrow"></i>
                  </div>
                </a>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="solution-forgerock-intro">IAM</div>
              </Col>
              <div className="solution-gray-lane" />
              <Col className="gutter-row" span={16}>
                <a
                  className="unifiedcontrol-card-default"
                  href="/careers/detail/intern"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="unifiedcontrol-card-title2">
                    Cyber Security / Information Security Intern (non-paid)
                    <i className="approw-arrow-down-line arrow"></i>
                  </div>
                </a>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="solution-forgerock-intro">IAM</div>
              </Col>
              <div className="solution-gray-lane" />
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
