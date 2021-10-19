import React, { Component, useState } from "react";
import "./Header2.css";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import Logo from "../../img/Authright_logo_white_text.png";


export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  if (isOpen) {
    return (
      <div>
        <header className="header-bg">
        {/* <h1 class="logo">Logo</h1> */}
        <NavLink to="/home">
            <img className="headerLogo" src={Logo} width={160} alt=""/>
        </NavLink>
        <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
        <nav className="header-nav">
          <ul>
            <li><NavLink to="/home" onClick={close}>Home</NavLink></li>
            <li><NavLink to="/services/iam" onClick={close}>Service</NavLink></li>
            <li><NavLink to="/customer" onClick={close}>Customer</NavLink></li>
            <li><NavLink to="/partners" onClick={close}>Partners</NavLink></li>
            <li><NavLink to="/about-us" onClick={close}>About Us</NavLink></li>
          </ul>
        </nav>
        <label for="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
        </header>
  
      </div>
    );
  } 
  return (
    <div>
        <header className="header-bg">
        {/* <NavLink to="/home">
            <img className="headerLogo" src={Logo} width={160} alt=""/>
        </NavLink> */}
        {/* <input type="checkbox" id="nav-toggle" className="nav-toggle2" onClick={() => setIsOpen(prev => !prev)}/> */}
        <input type="checkbox" id="nav-toggle" className="nav-toggle2" onClick={() => setIsOpen(prev => !prev)}/>
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
  
      </div>
  )

  
  




  }


