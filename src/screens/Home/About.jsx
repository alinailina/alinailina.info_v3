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
          Hello! My name is Alina. I'm a Front-End Developer and UI Imagineer. I
          make <span> clean</span>, <span>predictable</span> and{" "}
          <span>simply awesome</span> React.js applications that meet high
          standards for usability and scale.
        </p>
        <Link to="/about">Read my story</Link>
      </div>
    </div>
  );
};

export default About;
