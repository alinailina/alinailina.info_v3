import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import css from "./index.module.scss";

const formatDay = (d) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[d.getDay()];
  return day;
};

const App = () => {
  return (
    <div className={css.container}>
      <Header title="About" />
      <div>
        <p>
          My name is Alina Ilina. I’m a Front-End Developer and UI Imagineer, a
          portmanteau title I borrowed from{" "}
          <a
            href="https://en.wikipedia.org/wiki/Walt_Disney_Imagineering"
            target="_blank"
            rel="noopener noreferrer"
          >
            Walt Disney Inc.
          </a>
          , as
          <span>
            I believe user interfaces <span>tell a story</span>, and nothing is
            more important to a good narrative than imagination .
          </span>
        </p>
        <p>
          I combine my passion for user interface design and development to help
          brands create digital experiences for a long-lasting emotional
          connection with their audience.
        </p>
        <p>
          My strong interests in usability and interaction design inform my work
          as a Developer. I believe less is more and strive for depth through
          simplicity &mdash; making everything obvinpm startous or
          self-explanatory is my ultimate goal as a Developer and a Human.
        </p>

        <p>
          An expert in the making, I occasionally write about things I learn{" "}
          <Link to="/journal">here</Link>.
        </p>

        <p>
          When I'm not writing code, I like to do strength training exercises,
          listen to podcasts and watch popular science documentaries.
        </p>

        <p>
          You've made it this far, nice! Enjoy your {formatDay(new Date())}!
        </p>
        <p>Regards,</p>
        <p> Alina</p>
        <div>
          <img src={require("../../assets/signature.svg")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
