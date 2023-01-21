import React from 'react'
import Image from 'next/image'
import Img1 from '../public/foto1.jpeg'
import Card from './Card.jsx'


const Articoli = () => {
  return (
    <section id='articoli' className='bg-slate-900 w-full '>
        <div className="flex flex-col bg-white m-auto p-auto">
            <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
                Articoli
            </h1>
            <div className="flex overflow-x-scroll pb-10 scrollbar-hide snap-x">
                <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 snap-x">
                    <Card />

                    <Card />

                    <Card />

                    <Card />

                    <Card />
                    
                    <Card />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Articoli