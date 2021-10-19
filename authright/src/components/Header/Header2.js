import React, { useState } from "react";
import "./Header2.css";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import Logo from "../../img/Authright_logo_white_text.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const isMobile = useMediaQuery({ query: "(max-width: 400px)" });
  const onClick = (name) => {
    setIsSelected(name);
    setIsOpen(!isOpen);
  };
  const Nav = (
    <nav className="header-nav">
      <ul>
        <li>
          <NavLink
            to="/home"
            className={isSelected === "home" ? "nav-active" : ""}
            onClick={() => onClick("home")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services/iam"
            className={isSelected === "service" ? "nav-active" : ""}
            onClick={() => onClick("service")}
          >
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/customer"
            className={isSelected === "customer" ? "nav-active" : ""}
            onClick={() => onClick("customer")}
          >
            Customer
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/partners"
            className={isSelected === "partners" ? "nav-active" : ""}
            onClick={() => onClick("partners")}
          >
            Partners
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={isSelected === "aboutus" ? "nav-active" : ""}
            onClick={() => onClick("aboutus")}
          >
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
        {isMobile ? isOpen ? Nav : <div /> : Nav}
        <label className="nav-toggle-label" onClick={() => onClick()}>
          <span></span>
        </label>
      </header>
    </div>
  );
}
