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
        <div>
        <FaReact />
        <SiJavascript />
        <FaSass />
        <FaWordpress />
        <FaHtml5 />
        <FaGitAlt />
        <FaBootstrap />
        <FaBootstrap />
      </div>
      </div>
    
    </div>
  );
};

export default Stack;
