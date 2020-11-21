import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Hero from "./Hero";
import About from "./About";
import Apps from "../../components/Apps";

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

  // Filter featured apps
  const apps = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "app" &&
    entry.fields.featured === "featured"
      ? apps.push(entry)
      : null
  );

  console.log(apps);
  return (
    <div className={css.container}>
      <Hero />
      <About />
      <div>
        <h3>Apps</h3>
        <Link to="apps">View all</Link>
      </div>
      <Apps apps={apps} />
    </div>
  );
};

export default App;
