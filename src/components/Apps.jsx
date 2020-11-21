import React from "react";
import App from "./App";

const Apps = ({ apps }) => {
  return (
    <div className="apps">
      {apps.map((app, i) => (
        <App key={i} id={i} app={app} />
      ))}
    </div>
  );
};

export default Apps;
