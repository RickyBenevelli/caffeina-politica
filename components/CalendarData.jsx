import React from 'react'
import {TbCalendarStats} from 'react-icons/tb'

const CalendarData = (props) => {
  return (
    <div>
        <div className='flex flex-row items-start justify-start p-3'>
            <TbCalendarStats size={20} className=""/>
            <div className='flex flex-col items-center justify-start'>
                <h3 className='text-sm font-semibold px-2 capitalize'>{props.data}</h3>
                <p className='font-light text-xs'> 19:00-21:00</p>
            </div>
        </div>
    </div>
  )
}

export default CalendarData