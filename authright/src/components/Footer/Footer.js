import React, { Component } from "react";
import "./Footer.css";
import { Row, Col, Divider } from "antd";
import { ReactComponent as FooterDivider } from "../../img/Footer-divi.svg";

const style = { background: "#000", padding: "10px 0" };

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-bg">
        <div className="inner-footer">
          <div className="gray-lane-footer" />
          <Row gutter={[10, 10]}>
            <Col className="gutter-row" span={12}>
              <div style={style}>
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
            <Col className="gutter-row" span={12}>
              <div style={style}>
                {/* <FooterDivider className="footer-divi-img" /> */}
                <div className="footer-title">CONTACT INFO</div>
                <div className="footer-content">
                  Address: 888 Washington Street, Suite 301 Dedham MA, 02026
                </div>
                <div className="footer-content">Phone: 781-686-1923</div>
                <div className="footer-content">Fax: 781-686-9639</div>
                <div className="footer-content">Email: info@authright.com</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
