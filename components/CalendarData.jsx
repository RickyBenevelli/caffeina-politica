import React, {useContext} from 'react'
import { EventJsonLd } from 'next-seo';
import dayjs from 'dayjs';
import 'dayjs/locale/it';

import {TbCalendarStats} from 'react-icons/tb'

import {EventContext} from './EventContext'

const CalendarData = (props) => {
  const {selected, setSelected} = useContext(EventContext)

  const handleClick = () => {
    setSelected(props.index)
  }

  return (
    <>
      <EventJsonLd
        name={props.event.title}
        startDate={props.event.date}
        endDate={props.event.date}
        description={props.event.description}
        performers={props.event.guest}
        url={props.event.url}
      />
      <div className={`flex flex-col items-start pt-1 pb-4 w-full px-2 lg:px-5 cursor-pointer rounded-lg ${props.index == selected ? "bg-[#D8694D]/90" : "hover:bg-[#7C7270]/30"} transition-colors ease-in duration-100`} onClick={handleClick}>

          <div className='flex flex-row items-center justify-start py-2 md:p-2 w-full'>

              <div className='p-1'>
                <TbCalendarStats className="w-5 h-5"/>
              </div>

              <div className='flex flex-col items-center justify-center md:px-2'>
                  {props.event != undefined ? <h3 className='text-sm lg:text-base xl:text-lg font-semibold capitalize'>{dayjs(props.event.date).locale('it').format('DD MMMM')}</h3>
                  : ""}
              </div>

          </div>
        
          {props.event.placeAndTime && <p className='text-xs font-light px-2'>{props.event.placeAndTime}</p>}
      </div>
    </>
  )
}

export default CalendarData