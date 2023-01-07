import React from 'react'
// import {BsFillMoonStarsFill} from 'react-icons/bs'
import Image from 'next/image'
import Img1 from '../public/foto1.jpeg'
import Img2 from '../public/blob.svg'


const Hero = () => {
  return (
    <div className="h-screen bg-gradient-to-tl from-orange-500 to-orange-50">
        <div className='max-w-[1350px] m-auto h-screen overflow-hidden'>

        <div>
            <h1 className='text-center text-4xl xl:text-7xl text-slate-800 font-bold p-5 pt-24 xl:pb-20 xl:pt-40 '>
                Lo spazio di dibattito di Reggio Emilia
            </h1>
        </div>
        {/* contenitore testo e immagine */}
        <div className='md:flex ml:flex-row text-slate-900'>
            <div className='md:w-1/2'>
                <h2 className='font-semibold text-2xl xl:text-4xl text-center p-5 xl:p-10 leading-relaxed'>Da giovani, <br /> per giovani.</h2>

                <p className='text-xl font-medium px-8 xl:px-10 text-justify '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, tenetur quos tempora soluta facilis fuga inventore!</p>
            </div>
            <div className=' md:w-1/2 relative p-10'>
                <Image src={Img2} alt="bolla grafica" className='w-[150%] absolute top-[-20%] left-16 z-0'/>
                <Image src={Img1} alt="foto di un evento di caffeina politica" className='w-2/3 md:w-4/6 left-8 rounded-xl absolute z-0 drop-shadow-[0_35px_35px_rgba(0,0,0,0.50)]'/>
            </div>
        </div>
        


        </div>
    </div>
  )
}

export default Hero