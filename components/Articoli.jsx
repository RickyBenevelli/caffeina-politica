import React from 'react'
import Image from 'next/image'
import Img1 from '../public/foto1.jpeg'
import Card from './Card.jsx'
import Title from './Title'


const Articoli = () => {
  return (
    <section id='articoli' className='bg-slate-900 w-full '>
        <div className="flex flex-col bg-white m-auto p-auto">
            <Title title='ARTICOLI' background='NEWS' />
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