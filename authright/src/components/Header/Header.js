import React, { Component } from "react";
import "./Header.css";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import Logo from "../../img/Logo.png";

const { SubMenu } = Menu;

export default class Header extends Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div className="inner1">
        <div className="inner2">
          <NavLink to="/home">
            <img className="logo" src={Logo} width={160} />
          </NavLink>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="home">
              <NavLink
                to="/home"
                style={{ color: "#8e8e93", textDecoration: "none" }}
                activeStyle={{ color: "#d1d1d6", textDecoration: "none" }}
              >
                Home
              </NavLink>
            </Menu.Item>
            <Menu.Item key="service">
              <NavLink
                to="/services/iam"
                style={{ color: "#8e8e93", textDecoration: "none" }}
                activeStyle={{ color: "#d1d1d6", textDecoration: "none" }}
              >
                Service
              </NavLink>
            </Menu.Item>
            {/* <SubMenu className='headerSubMenu' key="service" title="Services" style={{color: '#8e8e93', textDecoration: 'none'}} activeStyle={{color: '#d1d1d6', textDecoration: 'none'}}>
                            <Menu.Item key="setting:1"><NavLink style={{color: '#8e8e93', textDecoration: 'none'}} activeStyle={{color: '#d1d1d6', textDecoration: 'none'}} to="/services/iam">IAM</NavLink></Menu.Item>
                            {<Menu.Item key="setting:2"><NavLink style={{color: '#8e8e93', textDecoration: 'none'}} activeStyle={{color: '#d1d1d6', textDecoration: 'none'}} to="/services/digital">Digital Service</NavLink></Menu.Item> }
                        </SubMenu> */}
            <Menu.Item key="customer">
              <NavLink
                to="/customer"
                style={{ color: "#8e8e93", textDecoration: "none" }}
                activeStyle={{ color: "#d1d1d6", textDecoration: "none" }}
              >
                Customers
              </NavLink>
            </Menu.Item>

            <Menu.Item key="solution">
              <NavLink
                to="/solutions"
                style={{ color: "#8e8e93", textDecoration: "none" }}
                activeStyle={{ color: "#d1d1d6", textDecoration: "none" }}
              >
                Partners
              </NavLink>
            </Menu.Item>
            <Menu.Item key="about">
              <NavLink
                to="/about-us"
                style={{ color: "#8e8e93", textDecoration: "none" }}
                activeStyle={{ color: "#d1d1d6", textDecoration: "none" }}
              >
                About Us
              </NavLink>
            </Menu.Item>
            {/* <Menu.Item key="career">
                            <NavLink to="/careers" style={{color: '#8e8e93', textDecoration: 'none'}} activeStyle={{color: '#d1d1d6', textDecoration: 'none'}}>Careers</NavLink>   
                        </Menu.Item> */}
          </Menu>
        </div>
      </div>
    );
  }
}
