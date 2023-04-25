import React, {useState, useContext} from 'react'
import Link from 'next/link'
import useSWR from 'swr'

import {TbHandClick} from 'react-icons/tb'

import Calendar from './Calendar'
import Title from './Title'
import { EventContext } from './EventContext'

import dati from '../json/events.json'
import tagsjson from '../json/tags.json'

const Eventi = () => {
  const {selected, setSelected} = useContext(EventContext)

  const events = JSON.parse(JSON.stringify(dati))
  const nextsEvents = indiceProssimoEvento(events)

  return (
    <section id='eventi' className='bg-slate-50 py-20 lg:py-28'>
        <Title background="EVENTI" title="CALENDARIO"/>

        <div className='flex flex-col md:flex-row px-5 items-center lg:items-start max-w-[1350px] m-auto'>
            <div className='flex flex-col py-4 items-center md:w-1/2 md:px-0'>
                <Calendar events={events}/>
                <div className='flex flex-row items-center py-2 text-center justify-around'>
                  <TbHandClick className='w-4 h-4' />
                  <div className='text-slate-900 px-1 text-sm font-medium'>Select a date</div>
                </div>
            </div>

            {/* colonna di destra */}
            <div className='flex flex-col max-md:max-w-[400px] md:w-1/2 md:p-4 max-md:py-4'>
                {/* <Title background="EVENTO" title="PROSSIMO"/> */}
                <div className='text-center font-semibold text-2xl py-2 text-slate-800'>
                    {events && events[selected].title}
                </div>

                <div className='bg-[#EAEEF1] rounded-xl p-2 px-2 sm:px-5'>

                  <div className={`flex flex-row flex-wrap items-center justify-center pt-2 ${events[selected].tags.length>0 ? "" : "hidden"}`}>
                    {events && events[selected].tags.map((tag, index) => {
                      return (
                          <div className={`text-center text-sm text-white py-1 px-2 mx-2 mb-2 capitalize inline w-fit rounded-md`} key={index} style={{backgroundColor : `${tagsjson?.find((value) => value.tag == tag).color}`}}>
                            {tag}
                          </div>
                        )
                      })}
                  </div>

                  <div className='py-2'>
                    <div>
                      <span className='font-medium'>Luogo e orario: </span>{events && events[selected].placeAndTime}
                    </div>
                    <div className={`${(events && events[selected].guest!="") ? "" : "hidden"}`}>
                      <span className='font-medium'>Ospite: </span>{events && events[selected].guest}
                    </div>
                  </div>
                </div>

                <div className='text-slate-900 pt-3 text-left text-sm sm:text-base xl:text-lg'>
                    {events && events[selected].description}
                </div>

                <div className='text-center pt-10 text-lg font-medium text-slate-50/90'>
                    
                    {events && nextsEvents.includes(selected) && 
                    <Link href={events[selected]?.url} target="_blank">
                      <button className='bg-orange-500 shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/90 rounded-lg py-2 px-5 ease-in duration-300'>
                          Prenotati
                      </button>
                    </Link>
                      }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Eventi

function indiceProssimoEvento(events){
  const oggi = new Date()
  const prossimiEventi = events.map((evento, index) => {
    const dataEvento = new Date(evento.date)
    if(dataEvento >= oggi){
      return index
    }
  })
  return prossimiEventi
}