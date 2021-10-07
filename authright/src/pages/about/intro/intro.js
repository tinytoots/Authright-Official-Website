import React, { Component, ReactDOM } from "react";
import "./intro.css";
import { Row, Col, Divider } from "antd";
import "antd/dist/antd.css";
import values  from "./ourValues.js";

export default class intro extends Component {

  constructor(props) {
    super(props);
    this.state = {valueNum : -1}
  }
  
  _chooseValue(number) {
    this.setState({valueNum: number})
  }

  _cancelValue() {
    this.setState({valueNum: -1})
  }


  render() {
    return (
      <div className="about-intro-bg">
        <div className="about-intro-block">
          <div className="inner">
            {/* <img src={IAMImg} width={1200} alt = 'logo' /> */}
            <div className="about-whoWeAre-title1">
              Our Mission
              {/* <div className='gray-lane' /> */}
            </div>
            <div className="about-mission-subtitle">
                We Earn Trust by Actions<br />
                Stay True, Stay Right
            </div>
          
            {/* <div className="about-whoWeAre-title2">IAM</div> */}
            <div className="about-whoWeAre-content">
              We are committed to delivering values to our clients and partners. <br/>
              We are obsessed to help you succeed.
            </div>
          </div>
        </div>

        <div className="about-intro-block3">
          <div className="inner">
            <div className="about-values-title">Our Values</div>
            <div className="about-values">
              <Row gutter={16} justify="center">
                {values.map((item, index) => {
                  let select_style = this.state.valueNum === index ?  "value-halo":"";
                  return (
                  <Col className="gutter-row" span={6} key = {index}>
                    <div onMouseEnter={(e) => this._chooseValue(index,e)}
                         onMouseLeave={(e) => this._cancelValue(e)}
                         key = {index} className={this.state.valueNum  === index ?"selected-value" : "unselected-value"}>
                      <div className = {"value-area " + select_style}>
                        <div className = "value-img" >
                          {item.img}
                        </div>
                      </div>
                      <div className='value-preview' style={{color: select_style}}>
                        {item.title}
                      </div>
                    </div>
                  </Col>
                )})}
              </Row>
              
              <Row justify="center">
                <div className = "value-description" >
                 {this.state.valueNum === -1 ? "" :values[this.state.valueNum].content}
                </div>
                
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
