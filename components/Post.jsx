import React from "react";

import { MDXRemote } from "next-mdx-remote";
import PostHeading from "./PostHeading";
import Title from "./Title";
import Bibliography from "./Bibliography";
import Signature from "./Signature";
import Card from "./Card";
import Suggested from "./Suggested";

const components = {
  Bibliography,
  Signature,
};

const Post = ({ mdxSource, frontmatter, slug, readingTime, suggested }) => {
  return (
    <div className="flex flex-col px-4">
      <PostHeading frontmatter={frontmatter} readingTime={readingTime} />
      <div className="prose lg:prose-lg m-auto mb-20">
        <MDXRemote {...mdxSource} components={components} />
      </div>
      <Suggested suggested={suggested} />
    </div>
  );
};

export default Post;
