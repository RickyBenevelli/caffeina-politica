import React, { useEffect, useState} from 'react'
import axios from 'axios'
// import {BsFillMoonStarsFill} from 'react-icons/bs'
import Image from 'next/image'
import useSWR from 'swr'

// bg-gradient-to-br from-[#dac4a9] to-[#dc6041]
// from-[#dc6041] via-[#eabc84] to-[#dc6041]
// from-[#dc6041] via-[#e6a24f] to-[#dc6041]

const Hero = () => {
  const { events, isLoading, isError } = useEvents()

  return (
    <section id='home' className={`bg-gradient-to-br from-[#dc6041] via-[#e6a24f] to-[#dc6041]`}>
        <div className=' flex flex-col pt-20 lg:pt-[5.5] pb-14 text-slate-900 px-5 lg:px-8'>
            <div className='font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center py-3 md:py-6'>
                <h1>Caffeina Politica</h1>
            </div>
            <div className='font-semibold text-xl md:text-2xl lg:text-3xl text-center py-2 md:py-3'>
                <h2>Lo Spazio di dibattito di Reggio Emilia</h2>
            </div>

            <div className='flex flex-col md:flex-row text-center md:py-5 items-center'>
                {/* colonna di sinistra */}
                <div className='py-4 md:text-xl lg:text-2xl xl:text-2xl md:w-1/2 md:px-3'>
                    
                    <div className='font-normal text-xl md:text-2xl lg:text-3xl text-center py-2 md:py-3'>
                        <h3 className='pb-5 font-normal text-xl md:text-xl lg:text-2xl'>
                            Da giovani per giovani
                        </h3>
                    </div>
                    
                    {/* evento */}
                    <div className='bg-slate-100 mx-20 py-2 px-5 rounded-xl'>
                      <div className='flex flex-row justify-between text-base font-semibold text-gray-800/80'>
                        <div>
                          Prossimo Evento
                        </div>
                        <div>
                          {events && new Date(trovaProssimoEvento(events).date).toDateString()}
                        </div>
                      </div>

                      <div className='text-gray-800 font-medium'>
                        {events && trovaProssimoEvento(events).title}
                      </div>

                      <div className='text-base'>
                        {events && trovaProssimoEvento(events).excerpt}
                      </div>
                    </div>

                </div>

                {/* colonna di destra */}
                <div className='md:w-1/3 md:px-3 py-3 m-auto'>
                    <Image src='/hero.webp' alt='foto di un evento di Caffeina Politica' className='rounded-xl shadow-md shadow-black saturate-150' priority width={650} height={650}/>
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