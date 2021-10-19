import React, { Component } from "react";
import "./Footer.css";
import { Row, Col } from "antd";
import Linkedin from "../../img/bluelinkedin.png";

const style = { background: "#000", margin: "auto" };

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-bg">
          <div className="gray-lane-footer" />
          <Row gutter={[0, 10]}>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <div className="footer-block">
                <div>
                  {/* <FooterDivider className="footer-divi-img" /> */}
                  <div className="footer-title">GET TO KNOW US</div>
                </div>
                <div className="footer-link">
                  <a href="/services/iam">Services</a>
                </div>
                <div className="footer-link">
                  <a href="/customer">Customers</a>
                </div>
                <div className="footer-link">
                  <a href="/partners">Partners</a>
                </div>
                <div className="footer-link">
                  <a href="/about-us">About Us</a>
                </div>
                <div className="footer-link">
                  <a href="/careers">Careers</a>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <div className="footer-block">
                {/* <FooterDivider className="footer-divi-img" /> */}
                <div className="footer-title">CONTACT US</div>
                <div className="footer-content">
                  Address: 888 Washington Street, Dedham, MA 02026
                </div>
                <div className="footer-content">Phone: 781-686-1923</div>
                <div className="footer-content">Fax: 781-686-9639</div>
                {/* <div className="footer-content">Email: <a className="footer-content2" href={`mailto:${customerEmail}`}>info@authright.com</a></div> */}
                <div className="footer-content">Email: <a className="footer-content2" href="mailto:info@authright.com" rel="noreferrer" target="_blank">info@authright.com</a></div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <div className="footer-follow-bg">
                <div className="footer-block">
                  <div className="footer-title">FOLLOW US</div>
                  <img
                    className="footer-linkedin"
                    src={Linkedin}
                    width={32}
                    alt="advisor-linkedin"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open("https://www.linkedin.com/company/authright-inc/");
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
    );
  }
}
