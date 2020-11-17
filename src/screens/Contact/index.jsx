import React from "react";
import Header from "../../components/Header";
import { IoMdArrowDown } from "react-icons/io";
import { RiArrowRightUpLine } from "react-icons/ri";
import css from "./index.module.scss";

const App = () => {
  return (
    <div className={css.container}>
      <Header title="Contact" />
      <h3>
        For any enquiries, <br />
        or just to say hello
      </h3>
      <div>
        <label>
          Call
          <a href="tel:+358465935910">+(358) 4 659 35910</a>
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
        <label>
          Follow
          <div>
            <a
              href="https://www.linkedin.com/in/alinailina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lk
              <RiArrowRightUpLine />
            </a>
            <a
              href="https://github.com/alinailina"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git
              <RiArrowRightUpLine />
            </a>
            <a
              href="https://twitter.com/alinaimagineer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tw
              <RiArrowRightUpLine />
            </a>
          </div>
        </label>
      </div>
    </div>
  );
};

export default App;
