import React, { Component } from "react";
import "./costomerComments.css";
import Equifax from "../../../img/company/equifax.svg";
import ForgeRock from "../../../img/forgerock.svg";
import HomeDepot from "../../../img/the-home-depot.svg";
import Mohawk from "../../../img/comments-Mohawk.png";

export default class customerComments extends Component {
  render() {
    return (
      <div className="customerComments-bg">
        <div className="inner">
          <div
            className="customerComments-title"
            style={{ width: 800, margin: "auto" }}
          >
            What our customers say
          </div>
          <div className="customerComments-title2">
            "Since Authright was founded in 2014, we have provided customized
            IAM services to dozens of medium and large enterprises, and our IAM
            experts have been recognized and supported by our customers"
          </div>
        </div>

        <div
          className="container-customersComments"
          style={{ height: 300, color: "white", minWidth: 1200 }}
        >
          <div
            className="card-customersComments"
            data-tilt
            data-tilt-max="50"
            data-tilt-speed="400"
            data-tilt-perspective="500"
          >
            <div className="content-customersComments">
              <img className="comments-logo" src={Mohawk} alt="logo" />
              <br />
              {/* <img
                src={ForgerockCEOImag}
                width={60}
                alt="logo"
                className="customerComments-forgerockCeo-img"
              /> */}
              <h2>01</h2>
              <h3>Sathish Tirumalasetty</h3>
              <h4>Lead - Architecture & Development </h4>
              <h4>@ Mohawk Industries</h4>
              <p>
                “Working with authright team was an outstanding experience, they
                provided us excellent support.”
              </p>
              <a href="/mohawk-industries">Read More</a>
            </div>
          </div>
          <div className="card-customersComments">
            <div className="content-customersComments">
              <img
                className="comments-logo"
                src={ForgeRock}
                height={110}
                alt="logo"
              />
              <br />
              <h2>02</h2>
              {/* <img
                src={PingCEOImag}
                width={60}
                alt="logo"
                className="customerComments-forgerockCeo-img"
              /> */}
              <h3>Jay Butler</h3>
              <h4>Major Account Manager</h4>
              <h4> @ ForgeRock</h4>
              <p>
                "I would bring the Authright team to any ForgeRock customers for
                their exceptional ForgeRock services."
              </p>
              <a href="/deloitte">Read More</a>
            </div>
          </div>
          <div className="card-customersComments">
            <div className="content-customersComments">
              <img
                className="comments-logo-homedepot"
                src={HomeDepot}
                alt="logo"
              />
              <br />
              <h2>03</h2>
              {/* <img
                src={ForgerockCEOImag}
                width={60}
                alt="logo"
                className="customerComments-forgerockCeo-img"
              /> */}
              <h3>Linda Sroufe</h3>
              <h4>CIAM manager </h4>
              <h4>@ The Home Depot</h4>
              <p>"Top notch, we can count on the authright team."</p>
              <br height="30" />
              <a href="/mohawk-industries">Read More</a>
            </div>
          </div>
          <div className="card-customersComments">
            <div className="content-customersComments">
              <img className="comments-logo-equifax" src={Equifax} alt="logo" />
              <br />
              <h2>04</h2>
              {/* <img
                src={ForgerockCEOImag}
                width={60}
                alt="logo"
                className="customerComments-forgerockCeo-img"
              /> */}
              <h3>Todd Oxford</h3>
              <h4>Senior Director </h4>
              <h4>Identity and Access Security </h4>
              <h4>@ Equifax</h4>
              <p>
                “Great team! Authright is helping us build a more trustable and
                stable IAM platform.”
              </p>
              <a href="/mohawk-industries">Read More</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
