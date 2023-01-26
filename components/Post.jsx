import React from 'react'

import { MDXRemote } from 'next-mdx-remote'
import PostHeading from './PostHeading'
import Title from './Title'
import Bibliography from './Bibliography'

const components = {
  Bibliography
}

const Post = ({mdxSource, frontmatter, slug, readingTime}) => {
  return (
    <div className='flex flex-col px-4'>
        <PostHeading frontmatter={frontmatter} readingTime={readingTime}/>
        <div className='prose xl:prose-xl m-auto'>
          <MDXRemote {...mdxSource} components={components}/>
        </div>
    </div>
  )
}

export default Post