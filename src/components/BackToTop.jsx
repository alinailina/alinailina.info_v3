import React from "react";
import { Link } from "react-router-dom";

import { MdArrowUpward } from "react-icons/md";

const BackToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link onClick={scrollTop} className="backToTop">
      <span>
        <MdArrowUpward />
      </span>
    </Link>
  );
};

export default BackToTop;
