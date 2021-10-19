import React, { Component } from "react";
import "./intro.css";
import "antd/dist/antd.css";

export default class intro extends Component {
  render() {
    return (
      <div className="intro-bg">
        <div className="intro-content">
          <div className="intro-text">
            <div className="company-name-title">AUTHRIGHT</div>
            <div className="company-name-content1">
              <i>An Identity Company </i>
            </div>
            <div className="company-name-content2">Be True,&nbsp;Be Right</div>
          </div>
        </div>
       </div>
    );
  }
}
