import React from 'react'

import {TbCalendarStats} from 'react-icons/tb'
import Calendar from './Calendar'
import Title from './Title'

const Eventi = () => {
  return (
    <section id='eventi' className='bg-slate-50 py-10 lg:py-16'>
        <div className='flex flex-col md:flex-row px-5 items-center md:items-start'>
            <div className='flex flex-col md:w-1/2 p-4 items-center'>
                <Title background="EVENTI" title="CALENDARIO"/>
                <Calendar />
            </div>
            <div className='flex flex-col md:w-1/2 p-4'>
                <Title background="EVENTO" title="PROSSIMO"/>
                <div className='text-center font-semibold text-xl py-2 text-slate-800'>
                Elezioni e disaffezione: perché gli italiani non votano più sinistra?
                </div>
                <div className='text-center text-lg py-1'>
                    Ospite: Delrio
                </div>
                <div className='text-center text-xl text-slate-900'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officia, temporibus aut pariatur aliquam veniam velit reiciendis suscipit, blanditiis reprehenderit expedita voluptates commodi eaque corporis dolores amet similique at! Voluptatem.</p>
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