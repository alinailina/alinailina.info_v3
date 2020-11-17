import React from "react";
import { Link } from "react-router-dom";
import css from "./index.module.scss";

const About = () => {
  return (
    <div className={css.about}>
      <div>
        <h3>About</h3>
      </div>
      <div>
        <p>
         Hi! I'm Alina, a Front-End Web Developer and UI Imagineer
        </p>
        <Link to="/about">Read my story</Link>
      </div>
    </div>
  );
};

export default About;
