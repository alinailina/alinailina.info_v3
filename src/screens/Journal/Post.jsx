import React from "react";
//import { Link } from "react-router-dom";
import { formatDate, formatMonth, formatYear } from "./date";

// Styles
import css from "./index.module.scss";

const Post = ({ post }) => {
  const { date, title, description } = post.fields;
  const { url } = post.fields.image.fields.file;

  return (
    <div className={css.post}>
      <p>
        {formatDate(date)} / {formatMonth(date)} &mdash; {formatYear(date)}
      </p>
      <img src={url} alt="blog_post_visual" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Post;
