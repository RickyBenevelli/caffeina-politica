import React from 'react'
import dayjs from 'dayjs';
// import daysjs locale it
import 'dayjs/locale/it';

import {TbCalendarStats} from 'react-icons/tb'

const CalendarData = (props) => {
  return (
    <div className={`flex flex-col items-start pt-1 pb-4 w-full px-2 md:px-5 cursor-pointer rounded-lg ${props.stato == "on" ? "bg-[#D8694D]/90" : "hover:bg-[#7C7270]/30"} transition-colors ease-in duration-300`}>

        <div className='flex flex-row items-center justify-start py-2 md:p-2 w-full'>

            <div className='p-1'>
              <TbCalendarStats className="w-5 h-5"/>
            </div>

            <div className='flex flex-col items-center justify-center md:px-2'>
                {props.event != undefined ? <h3 className='text-sm lg:text-base xl:text-lg font-semibold capitalize'>{dayjs(props.event.date).locale('it').format('DD MMMM')}</h3>
                : ""}
            </div>

        </div>
      
        {props.event ? 
        <p className='text-xs font-light px-2'>{props.event.placeAndTime}</p>:
        <p className='text-xs font-light px-2'>Via Fermi 57 RE, ore 19:00</p>
        }
    </div>
  )
}

export default CalendarData