import React, { useState } from "react";
import "./Header2.css";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import Logo from "../../img/Authright_logo_white_text.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 400px)" });
  const onClick = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  const Nav = (
    <nav className= "header-nav">
      <ul>
        <li>
          <NavLink to="/home" onClick={() => onClick()}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services/iam" onClick={() => onClick()}>
            Service
          </NavLink>
        </li>
        <li>
          <NavLink to="/customer" onClick={() => onClick()}>
            Customer
          </NavLink>
        </li>
        <li>
          <NavLink to="/partners" onClick={() => onClick()}>
            Partners
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" onClick={() => onClick()}>
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );

  return (
    <div>
      <header className="header-bg">
        <NavLink to="/home">
          <img className="headerLogo" src={Logo} width={160} alt="" />
        </NavLink>
        {isMobile ? (isOpen ? Nav : <div />) : Nav}
        <label
          className="nav-toggle-label"
          onClick={() => onClick()}
        >
          <span></span>
        </label>
      </header>
    </div>
  );
}
