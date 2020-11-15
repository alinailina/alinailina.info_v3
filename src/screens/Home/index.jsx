import React from "react";
import Hero from "./Hero";
import About from "./About";
import css from "./index.module.scss";

import Projects from "../Projects";
const App = () => {
  return (
    <div className={css.container}>
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
