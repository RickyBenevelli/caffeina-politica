import React from 'react'

import {TbCalendarStats} from 'react-icons/tb'

const Eventi = () => {
  return (
    <div className='bg-[#FFFAF2] h-screen' id='eventi'>
        <div className='max-w-[1350px] m-auto grid grid-cols-12 gap-4 h-screen'>
        
            <div className='border-2 border-red-500 col-span-5 flex items-center'>
                
                <div className='w-full bg-slate-800 text-white rounded-xl flex flex-wrap items-center py-5 shadow-lg'>
                  <div className='flex  justify-around p-3 w-1/2'>
                      <TbCalendarStats size={20} className=""/>
                      <h3 className=''>26 Febbraio</h3>
                  </div>
                  <div className='flex flex-row justify-around p-3 w-1/2'>
                      <TbCalendarStats size={20} className=""/>
                      <h3>26 Febbraio</h3>
                  </div>
                  <div className='flex flex-row justify-around p-3 w-1/2'>
                      <TbCalendarStats size={20} className=""/>
                      <h3>26 Febbraio</h3>
                  </div>
                  <div className='flex flex-row justify-around p-3 w-1/2'>
                      <TbCalendarStats size={20} className=""/>
                      <h3>26 Febbraio</h3>
                  </div>
                  <div className='flex flex-row justify-around p-3 w-1/2'>
                      <TbCalendarStats size={20} className=""/>
                      <h3>26 Febbraio</h3>
                  </div>
                  <div className='flex flex-row justify-around p-3 w-1/2'>
                      <TbCalendarStats size={20} className=""/>
                      <h3>26 Febbraio</h3>
                  </div>
                  <div className='flex flex-row justify-around p-3 w-1/2'>
                      <TbCalendarStats size={20} className=""/>
                      <h3>26 Febbraio</h3>
                  </div>
                  <div className='flex flex-row justify-around p-3 w-1/2'>
                      <TbCalendarStats size={20} className=""/>
                      <h3>26 Febbraio</h3>
                  </div>
                </div>
            </div>
            <div className='border-2 border-red-500 col-span-7'>Prova</div>
        </div>
    </div>
  )
}

export default Eventi