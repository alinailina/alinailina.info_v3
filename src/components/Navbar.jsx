import React, { useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <nav>
      <div
        className={active ? "toggle active" : "toggle"}
        onClick={toggleActive}
      >
        <div className="hamburger"></div>
      </div>
      <div className="logo">
        <NavLink to="/" exact>
          <img src={require("../assets/logo.svg")} alt="logo" />
        </NavLink>
      </div>
      <ul className={active ? "active" : ""}>
        <li>
          <div>
            <img src={require("../assets/palette.svg")} alt="color-palette" />
          </div>
        </li>
        <li>
          <NavLink
            to="/"
            exact
            onClick={toggleActive}
            activeClassName="active-navlink"
          >
            <span>Home</span> <sup>0</sup>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            onClick={toggleActive}
            activeClassName="active-navlink"
          >
            <span>About</span> <sup>1</sup>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="works"
            onClick={toggleActive}
            activeClassName="active-navlink"
          >
            <span>Works</span> <sup>2</sup>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="journal"
            onClick={toggleActive}
            activeClassName="active-navlink"
          >
            <span>Journal</span> <sup>3</sup>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="faqs"
            onClick={toggleActive}
            activeClassName="active-navlink"
          >
            <span>Faqs</span> <sup>4</sup>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            onClick={toggleActive}
            activeClassName="active-navlink"
          >
            {" "}
            <span>Contact</span> <sup>5</sup>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
