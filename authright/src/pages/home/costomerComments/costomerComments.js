import React, { Component } from "react";
import "./costomerComments.css";
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Equifax from "../../../img/company/equifax.svg";
import ForgeRock from "../../../img/forgerock.svg";
import HomeDepot from "../../../img/the-home-depot.svg";
import Mohawk from "../../../img/comments-Mohawk.png";

export default class customerComments extends Component {
  render() {
    return (
      <div className="customerComments-bg">
        <div className="customerComments-section">
          <div
            className="customerComments-title"
          >
            Hear Directly from Those Who Love Us
          </div>
          <div className="customerComments-content">
            Since 2017, Authright has led the IAM industry, crafting tailored solutions for dozens of medium to large enterprises. Our expert team's dedication has earned us acclaim and trust from our clients, reinforcing our commitment to excellence.
          </div>
        </div>

        <div
          className="container-customersComments"
          style={{ height: 300, color: "white" }}
        >
          <Row gutter="10">
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="card-customersComments">
                  <div className="content-customersComments">
                    <img
                      className="comments-logo"
                      src={ForgeRock}
                      height={110}
                      alt="logo"
                    />
                    <br />
                    <h3>Jay Butler</h3>
                    <h4>Major Account Manager</h4>
                    <h4> @ ForgeRock</h4>
                    <div className="comment-paragraph">
                      <p>
                        "I would bring the Authright team to any ForgeRock customers
                        for their exceptional ForgeRock services."
                      </p>
                    </div>
                    {/* <a href="https://www.forgerock.com/partner/authright">Read More</a> */}
                  </div>
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="card-customersComments">
                  <div className="content-customersComments">
                    <img
                      className="comments-logo-homedepot"
                      src={HomeDepot}
                      alt="logo"
                    />
                    <br />
                    <h3>Linda Sroufe</h3>
                    <h4>Senior Manager of CIAM</h4>
                    <h4>@ The Home Depot</h4>
                    <div className="comment-paragraph">
                      <p>"Top notch, we can count on the authright team."</p>
                    </div>
                    {/* <br height="30" /> */}
                    {/* <a href="/home-depot">Read More</a> */}
                  </div>
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="card-customersComments">
                <div className="content-customersComments">
                  <img className="comments-logo-equifax" src={Equifax} alt="logo" />
                  <br />
                  <h3>Todd Oxford</h3>
                  <h4>Senior Director of IAM</h4>
                  <h4>@ Equifax</h4>
                  <div className="comment-paragraph">
                    <p className="equifax-comments-scope">
                      “Great team! Authright is helping us build a more trustable
                      and stable IAM platform.”
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="card-customersComments">
              <div className="content-customersComments">
                <img className="comments-logo-mohawk" src={Mohawk} alt="logo" />
                <br />
                <h3>Sathish</h3>
                <h4>Lead - Architecture & Development </h4>
                <h4>@ Mohawk Industries</h4>
                <div className="comment-paragraph">
                  <p>
                    “Working with authright team has been an outstanding
                    experience, they provided us excellent support.”
                  </p>
                </div>
                {/* <a href="/mohawk-industries">Read More</a> */}
              </div>
            </div>
            </Col>
          </Row>
          
        </div>
      </div>
    );
  }
}
