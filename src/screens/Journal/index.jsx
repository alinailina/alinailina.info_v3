import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Post from "./Post";

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

  // Filter blog posts
  const blog = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "blog" ? blog.push(entry) : null
  );

  return (
    <div className={css.container}>
      <Header title="Journal" />
      <div>
        {blog
          .sort((a, b) => new Date(a.fields.date) - new Date(b.fields.date))
          .reverse()
          .map((post, i) => (
            <Post key={i} post={post} />
          ))}
      </div>
    </div>
  );
};

export default App;
