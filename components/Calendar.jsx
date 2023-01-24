import React from 'react'

import {TbCalendarStats} from 'react-icons/tb'
import CalendarData from './CalendarData'


const Calendar = () => {
  return (
    <div className='bg-[#3C323A] text-slate-50 flex flex-row items-start justify-around rounded-xl p-2'>
        <div className='flex flex-col items-start justify-between'>
            
            <CalendarData data="26 febbraio" />
            <CalendarData data="26 marzo"/>
            <CalendarData data="30 aprile"/>
            <CalendarData data="28 maggio"/>

            
        </div>

        <div className='flex flex-col items-start justify-between '>
            
            <CalendarData data="24 settembre"/>
            <CalendarData data="29 ottobre"/>
            <CalendarData data="26 novembre"/>

        </div>

    </div>
  )
}

export default Calendar

/* 
<div className='bg-slate-800 text-white rounded-xl flex flex-wrap items-center py-5 shadow-lg'>
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
*/