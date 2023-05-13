import React from "react";
import { postFileNames, postsPath, sortByDate } from "../../utils";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import readingTime from "reading-time";
import { NextSeo, NewsArticleJsonLd } from 'next-seo';

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#3c323a" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>

        <meta name="twitter:title" content="Caffeina Politica" />
        <meta name="twitter:description" content="Lo spazio di dibattito pubblico" />
        <meta name="twitter:image" content="https://www.caffeinapolitica.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ca9204f7.png&w=3840&q=75" />

        {/* Google Search Console */}
        <meta name="google-site-verification" content="NV-KZa_aqMg8UaJdMsh9HPCkl_OyhURvg98Wp6JGw4I" />
      </Head>

      <NextSeo
        title={frontmatter.title}
        description={frontmatter.excerpt}
        canonical={`https://www.caffeinapolitica.com/posts/${slug}`}
        openGraph={{
          type: "article",
          article: {
            publishedTime: frontmatter.date,
            modifiedTime: frontmatter.date,
            authors: frontmatter.author,
            tags: frontmatter.tags,
          },
          url: `https://www.caffeinapolitica.com/posts/${slug}`,
          title: frontmatter.title,
          description: frontmatter.excerpt,
          images: [
            {
              url: "https://www.caffeinapolitica.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ca9204f7.png&w=3840&q=75",
              width: 1080,
              height: 298,
              alt: "Caffeina Politica",
            },
          ],
          site_name: "Caffeina Politica",
        }}
        twitter={{
          handle: "@caffeina_pol",
          site: "@caffeina_pol",
          cardType: "summary_large_image",
        }}
        />

      <NewsArticleJsonLd
        url={`https://www.caffeinapolitica.com/posts/${slug}`}
        title={frontmatter.title}
        images={[
          frontmatter.image,
        ]}
        keywords={frontmatter.tags}
        datePublished={frontmatter.date}
        dateModified={frontmatter.date}
        authorName={frontmatter.author}
        publisherName="Caffeina Politica"
        publisherLogo="https://www.caffeinapolitica.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ca9204f7.png&w=3840&q=75"
        description={frontmatter.description}
      />

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
