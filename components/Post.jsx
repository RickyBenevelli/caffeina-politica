import React from 'react'

import { MDXRemote } from 'next-mdx-remote'
import PostHeading from './PostHeading'

const Post = ({mdxSource, frontmatter, slug, readingTime}) => {
  return (
    <div>
        <PostHeading frontmatter={frontmatter} readingTime={readingTime}/>
        <div className='prose prose-2xl'>
          <MDXRemote {...mdxSource}/>
        </div>
    </div>
  )
}

export default Post