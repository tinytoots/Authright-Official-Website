import React, { Component } from "react";
import "./Header2.css";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import Logo from "../../img/Authright_logo_white_text.png";


export default class Header extends Component {

  render() {
    return (
      <div>
        <header className="header-bg">
        {/* <h1 class="logo">Logo</h1> */}
        <NavLink to="/home">
            <img className="headerLogo" src={Logo} width={160} alt=""/>
        </NavLink>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav className="header-nav">
          <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/services/iam">Service</NavLink></li>
            <li><NavLink to="/customer">Customer</NavLink></li>
            <li><NavLink to="/partners">Partners</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
          </ul>
        </nav>
        <label for="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
        </header>

        {/* <div class="content">
          <h2>Your content would go here</h2>
        </div> */}
      </div>
    );
  }
}
