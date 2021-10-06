import React, { Component } from "react";
import "./intro.css";
import { Row, Col, Divider } from "antd";
import "antd/dist/antd.css";
import Heart from "../../../img/heart.svg";
import Important from "../../../img/center.svg";
import Growth from "../../../img/arrow-growth.svg";
import Bulb from "../../../img/bulb-outline.svg";
import values  from "./ourValues.js";

const style = { background: "black", padding: "18px 18px" };

let data = ["E50003", "007AE5"];

const v_desc = ["123","345","678", "777"];

export default class intro extends Component {

  constructor(props) {
    super(props);
    this.state = {valueNum : 0}
  }
  
  _chooseValue(number) {
    this.setState({valueNum: number})
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
              <Row gutter={16}>
                {values.map((item, index) => {
                  let select_style = this.state.valueNum === index ?  "#18e8ff":"white";
                  return (
                  <Col className="gutter-row" span={6} key = {index}>
                    <div onClick={(e) => this._chooseValue(index,e)} key = {index} style={{fill: select_style}}>
                      <div className = "value-img" >
                        {item.img}
                      </div>
                      <div className='value-preview' style={{color: select_style}}>
                        {item.title}
                      </div>
                    </div>
                  </Col>
                )})}
              </Row>
              
              <Row>
                <div className = "value-description" >
                 {values[this.state.valueNum].content}
                </div>
                
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
