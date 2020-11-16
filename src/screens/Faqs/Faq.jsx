import React, { useState, useRef, useEffect } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { AiOutlinePlus } from "react-icons/ai";

// Styles
import css from "./index.module.scss";

const Faq = ({ faq }) => {
  //console.log(faq);
  const { question, answer } = faq.fields;
  const [active, setActive] = useState(false);
  const answerRef = useRef(null);
  const questionRef = useRef(null);

  // Format text
  const stringText = documentToHtmlString(answer);

  useEffect(() => {
    answerRef.current.style.maxHeight = active
      ? `${answerRef.current.scrollHeight}px`
      : "0px";
    questionRef.current.style.borderBottom = active
      ? "none"
      : "1px solid #2d2d2d";
    questionRef.current.style.color = active ? "#ff4f09" : "#2d2d2d";
  }, [active]);

  const toogleActive = () => {
    setActive(!active);
  };

  return (
    <div className={css.faq}>
      <div ref={questionRef} onClick={toogleActive}>
        <p>{question}</p>
        <div className={active ? "accToggle active" : "accToggle"}>
          <AiOutlinePlus />
        </div>
      </div>
      <div ref={answerRef}>
        <div
          dangerouslySetInnerHTML={{
            __html: stringText,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Faq;
