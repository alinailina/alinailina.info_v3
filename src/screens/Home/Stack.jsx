import React from "react";
import {
  FaReact,
  FaSass,
  FaWordpress,
  FaHtml5,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

// Styles
import css from "./index.module.scss";

const Stack = () => {
  return (
    <div className={css.stack}>
      <div>
        <h3>Technologies</h3>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <FaReact />
        <SiJavascript />
        <FaSass />
        <FaWordpress />
        <FaHtml5 />
        <FaGitAlt />
        <FaBootstrap />
      </div>
    </div>
  );
};

export default Stack;
