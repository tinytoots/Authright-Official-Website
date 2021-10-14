import React from 'react'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './card.css'
import { Link } from "react-router-dom"


var cardHsbc = {
  backgroundImage:
    "url(https://tva1.sinaimg.cn/large/008i3skNgy1guq233jsj0j60d00i741002.jpg)",
};


export default function Card() {

  return (
    <div className="card-bg" >
      <div className="card-grid-case-study-title">Our Case Studies</div>
      <div className="card-grid-title">
        We are committed to providing reliable and efficient IAM <br/>
        and Full Stack services in different industrial fields{" "}
      </div>
      <Row gutter={[25, 25]} wrap={true} justify="center">
        <Col className="gutter-row" >
          <div className="card" style={cardHsbc}>
            <div className="card-content">
              <h2 className="card-title">
                <p>Financial Services</p>
                <p>with CIAM</p>
              </h2>
              <p className="card-body">
                Digital Security Platform enabling millions of customer services
              </p>
              <Link to="/hsbc" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" >
          <div
            className="card"
            style={{
              backgroundImage:
                "url(https://tva1.sinaimg.cn/large/008i3skNgy1guq2837jepj60d008nmxm02.jpg)",
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
              <Link to="/home-depot" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" >
          <div
            className="card"
            style={{
              backgroundImage:
                "url(https://tva1.sinaimg.cn/large/008i3skNgy1guq2a71q0uj60d00jiad702.jpg)",
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
              <Link to="/mohawk-industries" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" >
          <div
            className="card"
            style={{
              backgroundImage:
                "url(https://tva1.sinaimg.cn/large/008i3skNgy1guq2aqrd9hj60d008o3zl02.jpg)",
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
              <Link to="/toyota" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" >
          <div
            className="card"
            style={{
              backgroundImage:
                "url(https://tva1.sinaimg.cn/large/008i3skNgy1guq2bvn9aaj60d00g9my902.jpg)",
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
              <Link to="/blue-cross-blue-shield" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" >
          <div
            className="card"
            style={{
              backgroundImage:
                "url(https://tva1.sinaimg.cn/large/008i3skNgy1guq2eyc3xrj60d007b0u002.jpg)",
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
              <Link to="/equifax" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" >
          <div
            className="card"
            style={{
              backgroundImage:
                "url(https://tva1.sinaimg.cn/large/008i3skNgy1guq2g5ihwrj60d008omxk02.jpg)",
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
              <Link to="/pearson" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" >
          <div
            className="card"
            style={{
              backgroundImage:
                "url(https://tva1.sinaimg.cn/large/008i3skNgy1guq2gs152vj60d009raao02.jpg)",
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
              <Link to="/deloitte" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </Col>
                
      </Row>
    </div>
  );
}
