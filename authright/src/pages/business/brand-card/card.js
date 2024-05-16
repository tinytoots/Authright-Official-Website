import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./card.css";
import { Link } from "react-router-dom";

var cardHsbc = {
  backgroundImage:
    "url(https://p.ipic.vip/3rtl8c.jpeg)",
};

export default function Card() {
  return (
    <div className="card-bg">
      <div className="card-grid-case-study-title">Client Success Stories</div>
      <div className="card-grid-title">
        We are dedicated to delivering robust and highly efficient IAM <br />
        and Full Stack services across diverse industries{" "}
      </div>
      <Row gutter={[0, 25]} wrap={true} justify="center">
        <Col className="gutter-row">
          <div className="card" style={cardHsbc}>
            <div className="card-content">
              <h2 className="card-title">
                <p>Empowering the Finance Sector</p>
                <p>with Cutting-Edge CIAM Services</p>
              </h2>
              <p className="card-body">
                Effortlessly manage millions of accounts with our cutting-edge Digital Security Platform.
              </p>
              <Link to="/1" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div
            className="card"
            style={{
              backgroundImage:
                "url(https://p.ipic.vip/cvvngb.jpeg)",
            }}
          >
            <div className="card-content">
              <h2 className="card-title">
                <p>Transforming Retail with</p>
                <p>Advanced CIAM Solutions</p>
              </h2>
              <p className="card-body">
                Assisting E-commerce businesses with essential daily customer authentication and authorization processes, ensuring smooth and secure transactions.
              </p>
              <Link to="/2" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div
            className="card"
            style={{
              backgroundImage:
                "url(https://p.ipic.vip/4pt01d.jpeg)",
            }}
          >
            <div className="card-content">
              <h2 className="card-title">
                <p>Empowering Global Businesses:</p>
                <p>Our Seamless SSO Solution</p>
              </h2>
              <p className="card-body">
                Authright delivers cutting-edge IAM solutions customized for global commercial enterprises.
              </p>
              <Link to="/3" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div
            className="card"
            style={{
              backgroundImage:
                "url(https://p.ipic.vip/l0jfjr.jpeg)",
            }}
          >
            <div className="card-content">
              <h2 className="card-title">
                <p>Revolutionizing the Automotive</p>
                <p>Industry with IAM Platform</p>
              </h2>
              <p className="card-body">
                Streamlined application platform  with IAM capabilities empowering end users
              </p>
              <Link to="/4" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div
            className="card"
            style={{
              backgroundImage:
                "url(https://p.ipic.vip/0ea9m1.jpeg)",
            }}
          >
            <div className="card-content">
              <h2 className="card-title">
                <p>Empowering Healthcare Giants</p>
                <p>with Cutting-Edge IAM Services</p>
              </h2>
              <p className="card-body">
                Seamless multi-Region system migration and upgrade for regulatory compliance.
              </p>
              <Link to="/5" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div
            className="card"
            style={{
              backgroundImage:
                "url(https://p.ipic.vip/ez6cdf.jpeg)",
            }}
          >
            <div className="card-content">
              <h2 className="card-title">
                <p>Your Go-To IAM Solution</p>
                <p>for Workforce Management</p>
              </h2>
              <p className="card-body">
                Boosting employee security with MFA and streamlining SSO processes
              </p>
              <Link to="/6" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div
            className="card"
            style={{
              backgroundImage:
                "url(https://p.ipic.vip/vc1utl.jpeg)",
            }}
          >
            <div className="card-content">
              <h2 className="card-title">
                <p>Empowering Education</p>
                <p>with Our IAM Platform</p>
              </h2>
              <p className="card-body">
                Ensuring unwavering reliability and security in end user access.
              </p>
              <Link to="/7" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div
            className="card"
            style={{
              backgroundImage:
                "url(https://p.ipic.vip/jryao2.jpeg)",
            }}
          >
            <div className="card-content">
              <h2 className="card-title">
                <p>Revolutionary IAM Program</p>
                <p>Empowering Governmental Organizations</p>
              </h2>
              <p className="card-body">
                Empowering clients through seamless User Lifecycle Management and Cross-Domain SSO.
              </p>
              <Link to="/8" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
