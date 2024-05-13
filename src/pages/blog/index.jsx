import React from "react";
import Posts from "../../components/blog posts";
import { memo } from "react";

const Blog = () => {
  return (
    <>
      <Posts />
    </>
  );
};

export default memo(Blog);
