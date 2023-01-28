import React from "react";
import { postFileNames, postsPath, sortByDate } from "../../utils";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import readingTime from "reading-time";

import Post from "../../components/Post";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PostPage = ({ mdxSource, frontmatter, slug, readingTime, suggested }) => {
  return (
    <div className="bg-slate-100">
      <div className="pt-24 max-w-5xl m-auto">
        <Post
          mdxSource={mdxSource}
          frontmatter={frontmatter}
          slug={slug}
          readingTime={readingTime}
          suggested={suggested}
        />
      </div>
    </div>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const postsPaths = postFileNames.map((post) => ({
    params: { slug: post.replace(/\.mdx?$/, "") },
  }));

  return {
    paths: postsPaths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const filePath = path.join(postsPath, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);
  const mdxSource = await serialize(content);

  // fetch post data for suggested posts
  const posts = postFileNames.map((file) => {
    const content = fs.readFileSync(path.join(postsPath, `${file}`));
    const { data } = matter(content);
    return {
      frontmatter: data,
      slug: file.replace(/\.mdx?$/, ""),
    };
  });
  const fm = JSON.parse(JSON.stringify(frontmatter));
  return {
    props: {
      mdxSource,
      frontmatter: fm,
      slug,
      readingTime: readingTime(fileContent).text,
      suggested: JSON.parse(JSON.stringify(posts))
        //   filterByTag: posts
        .filter((item) =>
          item.frontmatter.tags?.some((i) => fm.tags.includes(i)) // check if tags are in common
        )
        // check if slug is different from current post
        .filter((item) => item.slug !== slug)
        .sort(sortByDate),
    },
  };
}
