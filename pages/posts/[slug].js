import React from "react";
import { postFileNames, postsPath, sortByDate } from "../../utils";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import readingTime from "reading-time";

import Post from "../../components/Post";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

const PostPage = ({ mdxSource, frontmatter, slug, readingTime, suggested }) => {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content="Lo spazio di dibattito di Reggio Emilia" />
        <meta author="Riccardo Benevelli" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#3c323a" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        
        
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.caffeinapolitica.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Caffeina Politica" />
        <meta property="og:description" content="Lo spazio di dibattito di Reggio Emilia" />
        <meta property="og:image" content="https://www.caffeinapolitica.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ca9204f7.png&w=3840&q=75" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="Lo spazio di dibattito di Reggio Emilia" />
        <meta property="twitter:domain" content="caffeinapolitica.vercel.app" />
        <meta property="twitter:url" content="https://www.caffeinapolitica.com" />
        <meta name="twitter:title" content="Caffeina Politica" />
        <meta name="twitter:description" content="Lo spazio di dibattito di Reggio Emilia" />
        <meta name="twitter:image" content="https://www.caffeinapolitica.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ca9204f7.png&w=3840&q=75" />

        {/* Google Search Console */}
        <meta name="google-site-verification" content="NV-KZa_aqMg8UaJdMsh9HPCkl_OyhURvg98Wp6JGw4I" />
      </Head>
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
    </>
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
      readingTime: readingTime(fileContent).minutes,
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
