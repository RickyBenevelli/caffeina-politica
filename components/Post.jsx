import React from "react";
import { ArticleJsonLd } from 'next-seo';
import { MDXRemote } from "next-mdx-remote";

import PostHeading from "./PostHeading";
import Bibliography from "./Bibliography";
import Signature from "./Signature";
import Suggested from "./Suggested";

const components = {
  Bibliography,
  Signature,
};

const Post = ({ mdxSource, frontmatter, slug, readingTime, suggested }) => {
  return (
    <div className="flex flex-col px-4">
      <ArticleJsonLd
        url={`https://caffeina-poli.com/posts/${slug}`}
        title={frontmatter.title}
        images={[frontmatter.image]}
        datePublished={frontmatter.date}
        dateModified={frontmatter.date}
        authorName={frontmatter.author}
        publisherName="Caffeina Politica"
        publisherLogo="https://www.caffeinapolitica.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ca9204f7.png&w=3840&q=75"
        description={frontmatter.excerpt}
      />
      <PostHeading frontmatter={frontmatter} readingTime={readingTime} />
      <div className="prose lg:prose-lg m-auto mb-20">
        <MDXRemote {...mdxSource} components={components} />
      </div>
      <Suggested suggested={suggested} />
    </div>
  );
};

export default Post;
