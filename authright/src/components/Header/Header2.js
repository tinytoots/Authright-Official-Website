import React, { useState } from "react";
import "./Header2.css";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import Logo from "../../img/Authright_logo_white_text.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  const onClose = (name) => {
    setIsSelected(name);
    setIsOpen(false);
  };
  const Nav = (
    <nav className="header-nav">
      <ul>
        <li>
          <NavLink
            to="/home"
            className={isSelected === "home" ? "nav-active" : ""}
            onClick={() => onClose("home")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services/iam"
            className={isSelected === "service" ? "nav-active" : ""}
            onClick={() => onClose("service")}
          >
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/customer"
            className={isSelected === "customer" ? "nav-active" : ""}
            onClick={() => onClose("customer")}
          >
            Customer
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/partners"
            className={isSelected === "partners" ? "nav-active" : ""}
            onClick={() => onClose("partners")}
          >
            Partners
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={isSelected === "aboutus" ? "nav-active" : ""}
            onClick={() => onClose("aboutus")}
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
        {isMobile ? (isOpen ? Nav : <div />) : Nav}
        <label className="nav-toggle-label" onClick={() => onClick()}>
          <span></span>
        </label>
      </header>
    </div>
  );
}
