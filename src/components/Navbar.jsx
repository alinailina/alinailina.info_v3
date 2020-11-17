import React, { useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import Palette from "./Palette";
import { RiArrowRightUpLine, RiCodeSSlashFill, RiHomeLine,  RiQuestionAnswerLine , RiContactsLine, RiUserLine, RiEditLine} from "react-icons/ri";

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
      <Palette />
      <NavLink to="/" exact className="logo"></NavLink>
      <ul className={active ? "active" : ""}>
        <li>
          <NavLink
            to="/"
            exact
            onClick={toggleActive}
            activeClassName="active-navlink"
          >
            
            <RiHomeLine/>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            onClick={toggleActive}
            activeClassName="active-navlink"
          >
           
            <RiUserLine/>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="works"
            onClick={toggleActive}
            activeClassName="active-navlink"
          >
            
            <RiCodeSSlashFill/>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="journal"
            onClick={toggleActive}
            activeClassName="active-navlink"
          >
           
            <RiEditLine/>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="faqs"
            onClick={toggleActive}
            activeClassName="active-navlink"
          >
           
            <RiQuestionAnswerLine/>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            onClick={toggleActive}
            activeClassName="active-navlink"
          >
          
          
            <RiContactsLine/>
          </NavLink>
        </li>
        <li>  
          <a
              href="https://www.linkedin.com/in/alinailina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lk
              <RiArrowRightUpLine />
            </a>
            <a
              href="https://github.com/alinailina"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git
              <RiArrowRightUpLine />
            </a>
            <a
              href="https://twitter.com/alinaimagineer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tw
              <RiArrowRightUpLine />
            </a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
