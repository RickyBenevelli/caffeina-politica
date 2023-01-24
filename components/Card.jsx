import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Img1 from '../public/foto1.jpeg'

const Card = ({post}) => {
  return (
    <Link href={`/posts/${post.slug}`}>
        <div className="inline-block px-3 snap-center">
            <div className="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md shadow-orange-100/30 bg-white hover:shadow-xl hover:shadow-orange-100/20 transition-shadow duration-300 ease-in-out flex flex-col">
                <h1 className='font-semibold text-lg text-center py-2'>{post.frontmatter.title}</h1>
                <Image src={Img1} alt="Picture of the author" width={300} height={300} className="object-cover w-5/6 h-32 mx-auto rounded-md shadow-sm shadow-black " />
                <p className='text-center font-light text-sm py-5 px-3'>Lorem ipsum dolor sit amet conse ctetur adipis icing elit. Rerum suscipit, vitae eum dolor expli cabo dolorem atque corrupti accus antium, recusandae ea eligendi inci dunt unde odit inve</p>
            </div>
        </div>
    </Link>
  )
}

export default Card