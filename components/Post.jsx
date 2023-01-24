import React from 'react'

import { MDXRemote } from 'next-mdx-remote'

const Post = ({mdxSource, frontmatter, slug}) => {
  return (
    <div>
        <h1 className='font-bold text-6xl'>{frontmatter.title}</h1>
        <MDXRemote {...mdxSource} />
    </div>
  )
}

export default Post