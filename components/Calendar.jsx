import React, { useContext } from 'react'

import {EventContext} from './EventContext'
import CalendarData from './CalendarData'


const Calendar = ({events}) => {
    
  return (
    <div className='bg-[#3C323A]  text-slate-50 flex flex-row items-start justify-around rounded-xl p-4 md:px-2'>
        <div className='flex flex-col items-start justify-between'>
            
            {events && events.map((event, index) => {
                if(index < events.length/2){
                    return(
                        <CalendarData key={index} event={event} index={index}/>
                    )
                }
            })}
            
        </div>

        <div className='flex flex-col items-start justify-between'>
            
            {events && events.map((event, index) => {
                if(index >= events.length/2){
                    return(
                        <CalendarData key={index} event={event} index={index}/>
                    )
                }
            })}

        </div>

    </div>
  )
}

export default Calendar