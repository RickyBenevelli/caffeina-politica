import React, {useState, useContext} from 'react'
import useSWR from 'swr'

import Calendar from './Calendar'
import Title from './Title'
import { EventContext } from './EventContext'

const Eventi = () => {
  const { events, isLoading, isError, nextIndex } = useEvents()
  const {selected, setSelected} = useContext(EventContext)


  return (
    <section id='eventi' className='bg-slate-50 py-20 lg:py-28'>
        <Title background="EVENTI" title="CALENDARIO"/>

        <div className='flex flex-col md:flex-row px-5 items-center lg:items-start max-w-[1350px] m-auto'>
            <div className='flex flex-col py-4 items-center md:w-1/2 md:px-0'>
                <Calendar events={events}/>
            </div>
            <div className='flex flex-col max-md:max-w-[400px] md:w-1/2 md:p-4 max-md:py-4'>
                {/* <Title background="EVENTO" title="PROSSIMO"/> */}
                <div className='text-center font-semibold text-2xl py-2 text-slate-800'>
                    {events && events[selected].title}
                </div>
                
                <div className='text-slate-900 pt-3 text-left text-sm sm:text-base xl:text-lg'>
                    {events && events[selected].excerpt}
                </div>

                <div className='text-center pt-10 text-lg font-medium text-slate-50/90'>
                    
                    {events && selected == nextIndex && 
                    <button className='bg-orange-500 shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/90 rounded-lg py-2 px-5 ease-in duration-300'>
                        Prenotati
                    </button>
                      }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Eventi

const fetcher = url => axios.get(url).then(res => res.data)

const useEvents = () => {
    const { data, error, isLoading } = useSWR('/api/events', fetcher)
    let nextIndex = 0
    const oggi = new Date()

    if(!isLoading){
      data.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
      })
      for (let i = 0; i < data.length; i++) {
        if (new Date(data[i].date) >= oggi) {
          nextIndex = i
          break
        }
      }
    }

    return {
        events: data,
        isLoading,
        isError: error,
        nextIndex
    }
}