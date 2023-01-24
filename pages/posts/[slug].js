import React from 'react'
import { postFileNames, postsPath } from '../../utils'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import Post from '../../components/Post'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const PostPage = ({mdxSource, frontmatter, slug}) => {
  return (
    <div className='py-20 max-w-4xl m-auto'>
        <Post mdxSource={mdxSource} frontmatter={frontmatter} slug={slug}/>
    </div>
  )
}

export default PostPage

export async function getStaticPaths() {
    const postsPaths = postFileNames.map((post) => ({
        params: { slug: post.replace(/\.mdx?$/, '') },
    }))

    return {
        paths: postsPaths,
        fallback: false,
    }
}

export async function getStaticProps({params: {slug}}) {
    const filePath = path.join(postsPath, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data:frontmatter, content } = matter(fileContent);
    const mdxSource = await serialize(content);
    return {
        props: {
            mdxSource,
            frontmatter: JSON.parse(JSON.stringify(frontmatter)),
            slug,
        },
    }
}