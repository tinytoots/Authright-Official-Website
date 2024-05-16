import React, { Component } from "react";
import "./intro.css";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import values from "./ourValues.js";

export default class intro extends Component {
  constructor(props) {
    super(props);
    this.state = { valueNum: -1 };
  }

  _chooseValue(number) {
    this.setState({ valueNum: number });
  }

  _cancelValue() {
    this.setState({ valueNum: -1 });
  }

  render() {
    return (
      <div className="about-intro-bg">
        <div className="about-intro-block">
          {/* <img src={IAMImg} width={1200} alt = 'logo' /> */}
          <div className="about-whoWeAre-title1">
            Authright Mission
            {/* <div className='gray-lane' /> */}
          </div>
          <div className="about-mission-subtitle">
            Trust Forged Through Actions
            <br />
            Stay True, Stay Right
          </div>

          {/* <div className="about-whoWeAre-title2">IAM</div> */}
          <div className="about-whoWeAre-content">
            We are unwaveringly dedicated to providing unparalleled value to our clients and partners, ensuring every interaction is a testament to our relentless commitment.{" "}
            <br />
            With an insatiable drive, we are fervently devoted to propelling your triumph and nurturing your expansion.
          </div>
        </div>

        <div className="about-intro-block3">
          <div className="about-values-title">Authright Values</div>
          <div className="about-values">
            <Row gutter={16} justify="center" style={{marginLeft:0,marginRight:0}}>
              {values.map((item, index) => {
                let select_style =
                  this.state.valueNum === index ? "value-halo" : "";
                return (
                  <Col className="gutter-row" span={6} key={index}>
                    <div
                      onMouseEnter={(e) => this._chooseValue(index, e)}
                      onMouseLeave={(e) => this._cancelValue(e)}
                      key={index}
                      className={
                        this.state.valueNum === index
                          ? "selected-value"
                          : "unselected-value"
                      }
                    >
                      <div className={"value-area " + select_style}>
                        <div className="value-img">{item.img}</div>
                      </div>
                      <div
                        className="value-preview"
                        style={{ color: select_style }}
                      >
                        {item.title}
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>

            <Row justify="center">
              <div className="value-description">
                {this.state.valueNum === -1
                  ? ""
                  : <div className = "vale-description-text">{values[this.state.valueNum].content}</div>}
              </div>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
