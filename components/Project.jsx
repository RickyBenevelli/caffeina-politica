import React from 'react'
import Image from 'next/image'

import prima from '../public/progetto/foto1.webp'
import seconda from '../public/progetto/foto2.webp'
import terza from '../public/progetto/foto3.webp'

const Project = () => {
    return (
        <section id='progetto' className='bg-[#AC815C] py-20 lg:py-28'>
            <div className="text-center mx-auto flex items-center justify-center py-10">
                <h2 className="absolute flex items-center justify-center font-black text-6xl text-white opacity-10">
                PROGETTO
                </h2>
                <h3 className="absolute flex items-center justify-center font-bold text-2xl text-[#F5F5F7]">
                PROGETTO
                </h3>
            </div>
    
            <div className='w-full flex flex-col px-5 items-center max-w-[400px] sm:max-w-[1350px] m-auto'>

                <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-10 py-5 md:py-10'>
                    <Image src={prima} alt='Caffeina Politica' className='rounded-md'/>
                    <Image src={seconda} alt='Caffeina Politica' className='rounded-md'/>
                    <Image src={terza} alt='Caffeina Politica' className='rounded-md'/>
                </div>

                <p className='text-white text-sm sm:text-base xl:text-lg '>
                    Caffeina Politica è un progetto da giovani e per giovani, nata dall&apos;idea di quattro studenti universitari di affrontare un dialogo e un dibattito più approfondito sulle tamatiche sociale e politiche ad oggi più importanti. Crediamo che ogni discussione debba fondarsi su dati reali, senza ideologismi e pregiudizi, in modo apartitico e totalmente gratuito. Ci troviamo ogni ultima domenica del mese per analizzare tematiche sempre diverse, con approfondimenti o ospiti di eccezione a precedere l&apos;immancabile dibattito tra tutti i partecipanti. Il nostro progetto è rivolto a tutti gli appassionati di politica e a coloro che desiderano approfondire questi argomenti.
                </p>
            </div>
        </section>
      )
}

export default Project