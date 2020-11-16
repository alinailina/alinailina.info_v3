import React from "react";
import Header from "../../components/Header";
import { IoMdArrowDown } from "react-icons/io";
import { RiArrowRightUpLine } from "react-icons/ri";
import css from "./index.module.scss";

const App = () => {
  return (
    <div className={css.container}>
      <Header title="Contact" />
      <h3>Need a developer for your project?</h3>
      <div>
        <label>
          Call
          <a href="tel:+358465935910">+358465935910</a>
        </label>
        <label>
          Email
          <a href="mailto:alinailina.random@gmail.com">ai.random@gmail.com</a>
        </label>
        <label>
          Visit
          <p>Helsinki, Finland</p>
        </label>
        <label>
          Download
          <a href="/" target="_blank" rel="noopener noreferrer">
            <IoMdArrowDown />
            CV
          </a>
        </label>
      </div>
      <div>
        <p>Follow</p>
        <div>
          <a
            href="https://www.linkedin.com/in/alinailina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
            <RiArrowRightUpLine />
          </a>
          <a
            href="https://github.com/alinailina"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
            <RiArrowRightUpLine />
          </a>
          <a
            href="https://twitter.com/alinaimagineer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
            <RiArrowRightUpLine />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
