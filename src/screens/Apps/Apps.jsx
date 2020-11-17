import React from "react";
import App from "./App";

// Styles
import css from "./index.module.scss";

const Apps = ({ apps }) => {
  return (
    <div className={css.apps}>
      {apps.map((app, i) => (
        <App key={i} id={i} app={app} />
      ))}
    </div>
  );
};

export default Apps;
