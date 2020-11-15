import React from "react";
// import { Link } from "react-router-dom";
import css from "./index.module.scss";

const Hero = () => {
  return (
    <div className={css.hero}>
      <div>
        <h1>Alina Ilina</h1>
        <div>
          <div>
          <img src={require("../../assets/placeholder.png")} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
