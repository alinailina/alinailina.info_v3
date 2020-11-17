import React, { useState, useRef, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiArrowRightUpLine } from "react-icons/ri";

// Styles
import css from "./index.module.scss";

const App = ({ app, id }) => {
  const { title, description, link } = app.fields;
  const [active, setActive] = useState(false);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
    titleRef.current.style.borderBottom = active ? "none" : "1px solid #2d2d2d";
    titleRef.current.style.color = active ? "#ff4f09" : "#2d2d2d";
  }, [active]);

  const toogleActive = () => {
    setActive(!active);
  };

  return (
    <div className={css.app}>
      <div ref={titleRef} onClick={toogleActive}>
        <p>0{id + 1}</p>
        <div>
          <h3>{title}</h3>
          <div className={active ? "accToggle active" : "accToggle"}>
            <AiOutlinePlus />
          </div>
        </div>
      </div>
      <div ref={contentRef}>
        <div>
          <p>{description}</p>
          <a href={link}>
            Link
            <RiArrowRightUpLine />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
