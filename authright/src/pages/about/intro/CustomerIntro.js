import React from "react";
import { Row, Col } from "antd";
import "./intro.css";

export default function CustomerIntro() {
  return (
    <div className="about-intro-block2">
        <Row gutter={16} justify="center">
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
              We are Committed to Saving Money and<br/>
              Improving Efficiency for Our Customers
            </div>
            <div className="career-company-intro">
              With more than{" "}
              <span style={{ fontFamily: "SFProDisplay-bold" }}>90%</span> IAM
              certificate holding rate, our professional team will escort your
              business all the time and provide 24/7 managed services.
            </div>
          </Col>
        </Row>
    </div>
  );
}
