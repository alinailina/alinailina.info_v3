import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Apps from "../../components/Apps";
import { RiArrowRightUpLine } from "react-icons/ri";

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

  // Filter apps
  const apps = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "app" ? apps.push(entry) : null
  );

  console.log(apps);

  return (
    <div className={css.container}>
      <Header title="Apps" icon="RiCodeSSlashFill"/>
      <Apps apps={apps} />
      <div>
        <p>
          I regularly post new stuff <br />
          on{" "}
          <a
            href="https://github.com/alinailina"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
            <RiArrowRightUpLine />
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
