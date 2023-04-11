import React from 'react'
import useSWR from 'swr'

import Calendar from './Calendar'
import Title from './Title'

const Eventi = () => {
  const { events, isLoading, isError } = useEvents()

  return (
    <section id='eventi' className='bg-slate-50 py-16 lg:py-28'>
                <Title background="EVENTI" title="CALENDARIO"/>
        <div className='flex flex-col lg:flex-row px-5 items-center lg:items-start'>
            <div className='flex flex-col lg:w-1/2 md:p-4 items-center'>
                <Calendar events={events}/>
            </div>
            <div className='flex flex-col lg:w-1/2 md:p-4 max-md:py-4'>
                {/* <Title background="EVENTO" title="PROSSIMO"/> */}
                <div className='text-center font-semibold text-xl py-2 text-slate-800'>
                Elezioni e disaffezione: perché gli italiani non votano più sinistra?
                </div>
                <div className='text-center text-lg py-1'>
                    Ospite: Delrio
                </div>
                <div className='text-left text-xl text-slate-900 px-5 pt-3'>
                    <p>L&apos;incontro sarà strutturato come segue:</p>
                    <ul className='list-disc px-5'>
                        <li>Introduzione dell&apos;ospite sul tema in questione.</li>
                        <li>domande dei partecipanti in merito</li>
                        <li>dibattito</li>
                    </ul>
                </div>
                <div className='text-center pt-10 text-lg font-medium text-slate-50/90'>
                    <button className='bg-orange-500 shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/90 rounded-lg py-2 px-5 ease-in duration-300'>
                        Prenotati
                    </button>
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
    
    if(!isLoading){
        data.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        })
    }

    return {
        events: data,
        isLoading,
        isError: error
    }
}