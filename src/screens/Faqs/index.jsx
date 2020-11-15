import React, { useState, useEffect } from "react";

// Styles
import css from "./index.module.scss";

// Children
import Header from "../../components/Header";
import Faq from "./Faq";
import Form from "./Form";

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

  // Filter projects
  const faqs = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "faq" ? faqs.push(entry) : null
  );

  console.log(faqs);

  return (
    <div className={css.container}>
      <Header title="Faqs" />
      <div className={css.faqs}>
        {faqs
          .sort((a, b) => a.fields.order - b.fields.order)
          .map((faq, i) => (
            <Faq key={i} faq={faq} />
          ))}
      </div>
      <div>
        <h3>Ask me anything</h3>
        <p>
          Your question not answered yet? Help me improve this page &mdash; ask
          away in the form down below.
        </p>

        <Form />
      </div>
    </div>
  );
};

export default App;
