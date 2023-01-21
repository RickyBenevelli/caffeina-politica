import React from 'react'
// import {BsFillMoonStarsFill} from 'react-icons/bs'
import Image from 'next/image'
import Img1 from '../public/foto1.jpeg'
import Img2 from '../public/blob.svg'


const Hero = () => {
  return (
    <section id='#home' className={`bg-orange-300`}>
        <div className=' flex flex-col pt-20 lg:pt-[5.5] pb-10 text-slate-900 px-5 lg:px-8'>
            <div className='font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center py-3 md:py-6'>
                <h1>Lo Spazio di dibattito di Reggio Emilia</h1>
            </div>
            <div className='font-semibold text-xl md:text-3xl lg:text-4xl text-center py-2 md:py-3'>
                <h2>Da giovani, per giovani</h2>
            </div>
            <div className='flex flex-col md:flex-row text-center md:py-5 items-center'>
                <div className='py-4 font-normal md:text-xl lg:text-2xl xl:text-3xl md:w-1/2 md:px-3 md:leading-relaxed'>
                    <p>Lorem ipsum dolor sit amet conse ctetur adipis icing elit. Dolore mque at archit ecto praes entium, conse quatur labo rum nisi eum</p>
                </div>
                <div className='md:w-1/2 md:px-3 py-3'>
                    <Image src={Img1} alt='foto1' className='rounded-xl shadow-md shadow-slate-700'/>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Hero