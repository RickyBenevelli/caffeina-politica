import React, { useEffect, useState} from 'react'
import axios from 'axios'
import useSWR from 'swr'
import dayjs from 'dayjs'
import 'dayjs/locale/it';
// import {BsFillMoonStarsFill} from 'react-icons/bs'
import Image from 'next/image'

// bg-gradient-to-br from-[#dac4a9] to-[#dc6041]
// from-[#dc6041] via-[#eabc84] to-[#dc6041]
// from-[#dc6041] via-[#e6a24f] to-[#dc6041]

const Hero = () => {
  const { events, isLoading, isError } = useEvents()

  return (
    <section id='home' className={`bg-gradient-to-br from-[#dc6041] via-[#e6a24f] to-[#dc6041]`}>
        {/* Contenitore generale */}
        <div className=' flex flex-col pt-20 lg:pt-[5.5] pb-14 text-slate-900 px-5 max-w-[1350px]'>

            <div className='font-black text-4xl text-center py-3 sm:text-5xl md:text-6xl md:pt-8 lg:text-5xl xl:text-6xl '>
                <h1>Caffeina Politica</h1>
            </div>

            <div className='font-semibold text-2xl text-center sm:text-3xl md:text-3xl py-2 md:py-3'>
                <h2>Lo Spazio di dibattito di Reggio Emilia</h2>
            </div>

            {/* contenitore eventi */}
            <div className='flex flex-col items-start text-center md:flex-row md:py-5'>

                {/* colonna di sinistra */}
                <div className='flex flex-col items-center pb-4 md:w-1/2 md:px-3 lg:text-2xl xl:text-2xl '>
                    
                    <div className='text-center pt-2 pb-7 md:py-3'>
                        <h3 className='font-medium text-xl sm:text-2xl md:text-2xl lg:text-3xl'>
                            Da giovani per giovani
                        </h3>
                    </div>
                    
                    {/* evento */}
                    <div className='bg-slate-100 py-2 px-5 rounded-xl max-w-[500px] lg:my-10'>
                      <div className='flex flex-row justify-between text-base font-semibold text-gray-800/80 py-1 lg:text-lg'>
                        <div>
                          Prossimo Evento
                        </div>
                        <div className='capitalize'>
                          {events && dayjs(trovaProssimoEvento(events).date).locale('it').format('DD MMMM')}
                        </div>
                      </div>

                      <div className='text-gray-800 py-2 text-2xl sm:text-3xl font-medium'>
                        {events && trovaProssimoEvento(events).title}
                      </div>

                      <div className='text-base py-2 lg:text-lg'>
                        {events && trovaProssimoEvento(events).excerpt}
                      </div>
                    </div>

                </div>

                {/* colonna di destra */}
                <div className='py-3 m-auto md:w-1/2 md:px-3 md:py-0'>
                    <Image src='/hero.webp' alt='foto di un evento di Caffeina Politica' className='rounded-xl shadow-md shadow-black saturate-150' priority width={650} height={650}/>
                    <div className='pt-5'>
                      <h4 className='font-semibold text-lg sm:text-xl'>APARTITICO E GRATUITO</h4>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Hero

const fetcher = url => axios.get(url).then(res => res.data)

const useEvents = () => {
    const { data, error, isLoading } = useSWR('/api/events', fetcher)
    
    return {
        events: data,
        isLoading,
        isError: error
    }
}

function trovaProssimoEvento(events){
  const oggi = new Date()
  let prossimoEvento = null

  events.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  })
  for (let i = 0; i < events.length; i++) {
    if (new Date(events[i].date) >= oggi) {
      prossimoEvento = events[i]
      break
    }
  }

  return prossimoEvento
}