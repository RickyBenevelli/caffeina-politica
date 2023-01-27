import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Img1 from '../public/foto1.jpeg'
import dayjs from 'dayjs'

const Card = ({post}) => {
  return (
    <Link href={`/posts/${post.slug}`}>
        <div className="inline-block px-3 snap-center">
            <div className="w-64 h-[22rem] max-w-xs overflow-hidden rounded-lg shadow-md shadow-orange-100/30 bg-white hover:shadow-xl hover:shadow-orange-100/20 transition-shadow duration-300 ease-in-out flex flex-col">
                <h1 className='font-semibold text-xl text-center py-2'>{post.frontmatter.title}</h1>
                <Image src={post.frontmatter.image} alt="Cover of the article" width={300} height={300} className="object-cover w-5/6 h-32 mx-auto rounded-md shadow-sm shadow-black " />
                <p className='text-center font-light text-xs p-2'>{dayjs(post.frontmatter.date).format('D/MM/YYYY')}</p>
                <p className='text-center font-light text-sm px-3'>
                  {post.frontmatter.excerpt}
                </p>
            </div>
        </div>
    </Link>
  )
}

export default Card