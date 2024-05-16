import React from "react";
import { Row, Col } from "antd";
import "./intro.css";

export default function CustomerIntro() {
  return (
    <div className="about-intro-block2">
        <Row gutter={0} justify="center">
          <Col className="gutter-row" >
            <div className="about-color-block">
              <div className="about-black-block">
                <div className="about-color-block-title">More than<br/>40,000,000<br/>users</div>
                <div className="about-color-block-served">served by</div>
                <div className="about-color-block-served2">Authright</div>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" >
            <div className="about-company-title2">
              We are committed to providing cost-efficient<br/>
              and highly effective solutions to our clients
            </div>
            <div className="career-company-intro">
              With over{" "}
              <span style={{ fontFamily: "SFProDisplay-bold" }}>90%</span> of our team holding IAM certificates, rest assured, your business is always in expert hands. Experience round-the-clock managed services with confidence, backed by our highly skilled professionals.
            </div>
          </Col>
        </Row>
    </div>
  );
}
