import React, { Component } from "react";
import "./intro.css";
import { Row, Col, Divider } from "antd";
import "antd/dist/antd.css";
import Heart from "../../../img/heart.svg";
import Important from "../../../img/center.svg";
import Growth from "../../../img/arrow-growth.svg";
import Bulb from "../../../img/bulb-outline.svg";

const style = { background: "black", padding: "18px 18px" };

let data = ["E50003", "007AE5"];

export default class intro extends Component {
  render() {
    return (
      <div className="about-intro-bg">
        <div className="about-intro-block">
          <div className="inner">
            {/* <img src={IAMImg} width={1200} alt = 'logo' /> */}
            <div className="about-whoWeAre-title1">
              Our Mission is to Continuously Deliver Identity Security to Any
              Organization
              {/* <div className='gray-lane' /> */}
            </div>
            {/* <div className="about-whoWeAre-title2">IAM</div> */}
            <div className="about-whoWeAre-content">
              We provide solutions to the most complicated enterprise identity
              problems and we are obsessed to help our customer succeed.
            </div>
          </div>
        </div>

        <div className="about-intro-block3">
          <div className="inner">
            <div className="about-values-title">Our Values</div>
            <div className="about-values">
              <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                  <img className="values-img" alt="" src={Heart} width={80} />
                </Col>
                <Col className="gutter-row" span={6}>
                  <img
                    className="values-img"
                    alt=""
                    src={Important}
                    width={80}
                  />
                </Col>
                <Col className="gutter-row" span={6}>
                  <img className="values-img" alt="" src={Growth} width={80} />
                </Col>
                <Col className="gutter-row" span={6}>
                  <img className="values-img" alt="" src={Bulb} width={80} />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                  <div style={style}>Customer First</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div style={style}>Employee Centered</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div style={style}>Growth Oriented</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div style={style}>Sharing Valued</div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
