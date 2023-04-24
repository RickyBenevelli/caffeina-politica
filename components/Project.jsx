import React from 'react'
import Image from 'next/image'

import prima from '../public/hero.webp'
import seconda from '../public/hero.webp'
import terza from '../public/hero.webp'
// bg-[#169873c3]   verde
// bg-[#ff8527dc]   arancione
const Project = () => {
    return (
        <section id='progetto' className='bg-[#169873c3] py-20 lg:py-28'>
            <div className="text-center mx-auto flex items-center justify-center py-10">
                <h1 className="absolute flex items-center justify-center font-black text-6xl text-white opacity-10">
                PROGETTO
                </h1>
                <h2 className="absolute flex items-center justify-center font-bold text-2xl text-[#F5F5F7]">
                PROGETTO
                </h2>
            </div>
    
            <div className='w-full flex flex-col px-5 items-center max-w-[400px] sm:max-w-[1350px] m-auto'>

                <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-10 pt-5 md:pt-10'>
                    <Image src={prima} alt='Caffeina Politica' className='rounded-md'/>
                    <Image src={prima} alt='Caffeina Politica' className='rounded-md'/>
                    <Image src={prima} alt='Caffeina Politica' className='rounded-md'/>
                </div>

                <p className='text-slate-900 text-sm sm:text-base xl:text-lg pt-5 lg:pt-10'>
                    Caffeina Politica è un progetto da giovani e per giovani, nata dall&apos;idea di quattro studenti universitari di affrontare un dialogo e un dibattito più approfondito sulle tamatiche sociale e politiche ad oggi più importanti. Crediamo che ogni discussione debba fondarsi su dati reali, senza ideologismi e pregiudizi, in modo apartitico e totalmente gratuito. Ci troviamo ogni ultima domenica del mese per analizzare tematiche sempre diverse, con approfondimenti o ospiti di eccezione a precedere l&apos;immancabile dibattito tra tutti i partecipanti. Il nostro progetto è rivolto a tutti gli appassionati di politica e a coloro che desiderano approfondire questi argomenti.
                </p>
            </div>
        </section>
      )
}

export default Project