import React from 'react'
// import {BsFillMoonStarsFill} from 'react-icons/bs'
import Image from 'next/image'
import Img1 from '../public/foto1.jpeg'
import Img2 from '../public/blob.svg'


const Hero = () => {
  return (
    <div className="h-screen bg-gradient-to-tl from-orange-500 to-orange-50 flex justify-center items-center overflow-hidden">
        <div className='max-w-[1350px] m-auto  p-5'>
            <div>
                <h1 className='text-slate-800 text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold h-1/3 mt-5 py-5'>
                    Lo spazio di dibattito di Reggio Emilia
                </h1>
            </div>
            <div className='lg:flex'>
                <div className='lg:w-1/2'>
                    <p className='p-2 text-lg md:text-3xl text-center my-10'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab tenetur repudiandae esse minima commodi veritatis obcaecati veniam necessitatibus asperiores, id omnis dolor mollitia amet accusantium et? Odio obcaecati provident quidem!
                    </p>
                </div>
                <div className='lg:w-1/2'>
                    <Image src={Img1} alt='foto di un evento di caffeina politica' className='rounded-xl shadow-lg static'/>
                    {/* aggiungere la bolla  */}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero