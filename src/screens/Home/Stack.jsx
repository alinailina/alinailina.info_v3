import React from "react";

import {
  FaReact,
  FaWordpress,
  FaSass,
  FaGithub,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
  FaCss3Alt,
  FaNpm,
  FaHtml5,
  FaNodeJs,
  FaLess,
} from "react-icons/fa";

import {
  SiJavascript,
  SiAdobexd,
  SiMaterialUi,
  SiJson,
  SiVisualstudio,
} from "react-icons/si";

// Styles
import css from "./index.module.scss";

const Stack = () => {
  return (
    <div className={css.stack}>
      <h3>My primary technologies</h3>
      <div>
        <p>
          <FaReact /> React/React Native
        </p>
        <p>
          <SiJavascript /> JavaScript
        </p>
        <p>
          <FaCss3Alt /> CSS3
        </p>
        <p>
          <FaSass /> Sass
        </p>
        <p>
          <FaBootstrap /> Bootstrap
        </p>
        <p>
          <SiMaterialUi /> Material UI
        </p>
        <p>
          <FaWordpress /> WordPress (as a headless CMS)
        </p>
        <p>Contenful</p>
        <p>
          <FaLess /> Less
        </p>
        <p>
          <SiVisualstudio />
          VScode
        </p>
        <p>
          <FaGitAlt /> Git
        </p>
        <p>
          <FaGithub />
          Github
        </p>
        <p>
          <FaNpm /> Npm
        </p>
        <p>
          <FaNodeJs />
          NodeJs
        </p>
        <p>
          <SiJson />
          Json
        </p>
        <p>
          <FaHtml5 />
          HTML5
        </p>
        <p>{"{REST: API}"}</p>{" "}
        <p>
          <FaFigma /> Figma
        </p>
        <p>
          <SiAdobexd /> AdobeXD
        </p>
      </div>
    </div>
  );
};

export default Stack;
