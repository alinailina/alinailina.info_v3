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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to="/about">Read my story</Link>
      </div>
    </div>
  );
};

export default About;
