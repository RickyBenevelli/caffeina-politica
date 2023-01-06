import React from 'react'
// import {BsFillMoonStarsFill} from 'react-icons/bs'
import Image from 'next/image'
import Img1 from '../public/foto1.jpeg'
import Img2 from '../public/blob.svg'


const Hero = () => {
  return (
    <div className="h-screen bg-gradient-to-tl from-orange-300 to-orange-100">
        <div className='max-w-[1350px] m-auto'>

        <div>
            <h1 className='text-center text-4xl xl:text-7xl text-slate-800 font-bold p-5 pt-32 xl:pb-20 xl:pt-40 '>
                Lo spazio di dibattito di Reggio Emilia
            </h1>
        </div>
        {/* contenitore testo e immagine */}
        <div className='xl:flex xl:flex-row text-slate-900'>
            <div className='xl:w-1/2'>
                <h2 className='font-semibold text-2xl xl:text-4xl text-center p-5 xl:p-10 leading-relaxed'>Da giovani, <br /> per giovani.</h2>

                <p className='text-xl font-medium px-8 xl:px-10 text-justify leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, tenetur quos tempora soluta facilis fuga inventore! Recusandae rem optio, voluptas laboriosam exercitationem numquam, esse itaque molestias hic, ipsam consequatur ullam.</p>
            </div>
            <div className=' w-1/2 relative'>
                <Image src={Img1} alt="foto di un evento di caffeina politica" className='w-4/6 rounded-xl absolute z-20'/>
                <Image src={Img2} alt="bolla grafica" className='w-[150%] absolute top-[-20%] right-0 z-10'/>
            </div>
        </div>
        


        </div>
    </div>
  )
}

export default Hero