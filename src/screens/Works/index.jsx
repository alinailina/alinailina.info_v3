import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Projects from "../Projects/Projects";
import { RiArrowRightUpLine } from "react-icons/ri";

// Styles
import css from "./index.module.scss";

// Contentful delivery API
const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

const App = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get all entries
  useEffect(() => {
    setLoading(true);
    client
      .getEntries()
      .then((response) => setEntries(response.items))
      .catch(console.error);
    setLoading(false);
  }, []);

  console.log(loading);

  // Filter all projects
  const projects = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "project" ? projects.push(entry) : null
  );

  console.log(projects);

  return (
    <div className={css.container}>
      <Header title="Apps" />
      <Projects projects={projects} />
    <div>
      <p>I regularly post new apps on Github<RiArrowRightUpLine /></p>
    </div>
    </div>
  );
};

export default App;
