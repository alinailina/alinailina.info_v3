import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Projects from "../Projects/Projects";

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
      <Header title="Works" />
      <Projects projects={projects} />
      {/* <section>
        <p>
          Something interesting is cooking here. Come back in a bit, or get
          notified when this page is ready!
        </p>
        <form name="get-update" method="post">
          <input type="hidden" name="form-name" value="get-update" />
          <label>
            Your email
            <input type="email" name="email" required />
          </label>
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
        <p>
          In the meantime, check out my{" "}
          <a
            href="https://github.com/alinailina"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          to see what I've been up to, or my <Link to="/faqs">Faqs</Link> page
          to find how I can be of service for you today.
        </p>
      </section> */}
    </div>
  );
};

export default App;
