import React from 'react'

import {TbCalendarStats} from 'react-icons/tb'
import Calendar from './Calendar'

const Eventi = () => {
  return (
    <section id='eventi' className='bg-slate-50 py-20'>
        <div className='flex flex-col md:flex-row px-5 items-start'>
            <div className='flex flex-col md:w-1/2 p-4'>
                <div className='text-center'>
                    <h1 className='font-black text-6xl text-blue-900/30 justify-center'>EVENTI</h1>
                    <h2 className='font-bold text-2xl text-slate-900 '>CALENDARIO</h2>
                </div>
                <Calendar />
            </div>
            <div className='flex flex-col md:w-1/2 p-4'>
                <div className='text-center py-8'>
                    <h1 className='font-black text-6xl text-blue-900/30'>EVENTI</h1>
                    <h2 className='font-bold text-2xl text-slate-900'>CALENDARIO</h2>
                </div>
                <div className='text-center'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officia, temporibus aut pariatur aliquam veniam velit reiciendis suscipit, blanditiis reprehenderit expedita voluptates commodi eaque corporis dolores amet similique at! Voluptatem.</p>
                </div>
                <div className='text-center py-5 text-lg font-medium text-slate-50/90'>
                    <button className='bg-orange-500 shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/90 rounded-lg py-1 px-3 ease-in duration-300'>
                        Prenotati
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Eventi