import React from 'react'
// import {BsFillMoonStarsFill} from 'react-icons/bs'
import Image from 'next/image'
import Img1 from '../public/foto1.jpeg'
import Img2 from '../public/blob.svg'
import { Element } from 'react-scroll'
// bg-gradient-to-br from-[#dac4a9] to-[#dc6041]
// from-[#dc6041] via-[#eabc84] to-[#dc6041]
// from-[#dc6041] via-[#e6a24f] to-[#dc6041]

const Hero = () => {
  return (
    <Element name='home' className={`bg-gradient-to-br from-[#dc6041] via-[#e6a24f] to-[#dc6041]`}>
        <div className=' flex flex-col pt-20 lg:pt-[5.5] pb-14 text-slate-900 px-5 lg:px-8'>
            <div className='font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center py-3 md:py-6'>
                <h1>Lo Spazio di dibattito di Reggio Emilia</h1>
            </div>
            <div className='font-semibold text-xl md:text-3xl lg:text-4xl text-center py-2 md:py-3'>
                <h2>Da giovani, per giovani</h2>
            </div>
            <div className='flex flex-col md:flex-row text-center md:py-5 items-center'>
                <div className='py-4 font-normal md:text-xl lg:text-2xl xl:text-3xl md:w-1/2 md:px-3 md:leading-relaxed'>
                    <p className='leading-relaxed '>Domande, dubbi, dati, dibattiti, idee divergenti, confronto rispettoso: tutto questo è Caffeina Politica, il posto dove esprimere le proprie idee e confrontarsi con tutti i presenti in modo vero, concreto, senza ideologismi.</p>
                </div>
                <div className='md:w-1/2 md:px-3 py-3'>
                    <Image src={Img1} alt='foto1' className='rounded-xl shadow-md shadow-black saturate-150' priority/>
                </div>
            </div>

        </div>
    </Element>
  )
}

export default Hero