import React from "react";
import Hero from "./Hero";
import About from "./About";
import Apps from "../Apps";
import css from "./index.module.scss";

const App = () => {
  return (
    <div className={css.container}>
      <Hero />
      <About />
      <Apps />
    </div>
  );
};

export default App;
