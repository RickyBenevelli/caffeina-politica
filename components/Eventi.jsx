import React from 'react'

import Calendar from './Calendar'
import Title from './Title'

const Eventi = () => {
  return (
    <section id='eventi' className='bg-slate-50 py-16 lg:py-28'>
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