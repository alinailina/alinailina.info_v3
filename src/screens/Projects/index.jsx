import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";

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

  // Filter featured projects
  const projects = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "project" &&
    entry.fields.featured === "featured"
      ? projects.push(entry)
      : null
  );

  console.log(projects);

  return (
    <div className={css.container}>
      <div>
        <h3>Works</h3>
        <Link to="works">View all</Link>
      </div>
      <Projects projects={projects} />
    </div>
  );
};

export default App;
