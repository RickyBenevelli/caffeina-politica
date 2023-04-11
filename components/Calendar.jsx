import React from 'react'

import CalendarData from './CalendarData'


const Calendar = ({events}) => {
  return (
    <div className='bg-[#3C323A]  text-slate-50 flex flex-row items-start justify-around rounded-xl p-4'>
        <div className='flex flex-col items-start justify-between'>
            
            {events && events.map((event, index) => {
                if(index < events.length/2){
                    return(
                        <CalendarData key={index} data={event.date} event={event}/>
                    )
                }
            })}
            
        </div>

        <div className='flex flex-col items-start justify-between'>
            
            {events && events.map((event, index) => {
                if(index >= events.length/2){
                    return(
                        <CalendarData key={index} data={event.date} event={event}/>
                    )
                }
            })}

        </div>

    </div>
  )
}

export default Calendar