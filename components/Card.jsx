import React from 'react'

import Image from 'next/image'
import Img1 from '../public/foto1.jpeg'

const Card = () => {
  return (
    <div>
        <div className="inline-block px-3 snap-center">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col">
                <h1 className='font-semibold text-lg text-center'>TITOLO</h1>
                <Image src={Img1} alt="Picture of the author" width={300} height={300} className="object-cover w-5/6 h-32 mx-auto rounded-md shadow-sm shadow-black " />
                <p className='text-center font-light text-sm py-5'>Lorem ipsum dolor, sit amet conse ctetur adipi sicing elit. Dignis simos reprehe nderit repe qualche parola </p>
            </div>
        </div>
    </div>
  )
}

export default Card