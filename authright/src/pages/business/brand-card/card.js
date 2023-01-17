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
      <div className="card-grid-case-study-title">Our Case Studies</div>
      <div className="card-grid-title">
        We are committed to providing reliable and efficient IAM <br />
        and Full Stack services in different industrial fields{" "}
      </div>
      <Row gutter={[0, 25]} wrap={true} justify="center">
        <Col className="gutter-row">
          <div className="card" style={cardHsbc}>
            <div className="card-content">
              <h2 className="card-title">
                <p>Financial Services</p>
                <p>with CIAM</p>
              </h2>
              <p className="card-body">
                Digital Security Platform enabling millions of customer services
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
                <p>Retailer Services with</p>
                <p>CIAM</p>
              </h2>
              <p className="card-body">
                E-commerce Store for daily customer authentication and
                authorization
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
                <p>Global Commercial</p>
                <p> SSO Soilution</p>
              </h2>
              <p className="card-body">
                Customized system integration and SSO implementation
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
                <p>Consumer Vehicle</p>
                <p>Industry IAM Platform</p>
              </h2>
              <p className="card-body">
                Unified application platform with IAM capability for end users
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
                <p>Healthcare Industry</p>
                <p>IAM Services</p>
              </h2>
              <p className="card-body">
                Compliance driven multi-region system migration and upgrade
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
                <p>Workforce IAM</p>
                <p>Solution</p>
              </h2>
              <p className="card-body">
                Enforce employee security with MFA while smoothing SSO process
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
                <p>IAM Platform for </p>
                <p>Educational Sercive</p>
              </h2>
              <p className="card-body">
                End user access handling with reliability and security
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
                <p>Governmental</p>
                <p>IAM Program</p>
              </h2>
              <p className="card-body">
                User lifecycle management and cross domain SSO
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
