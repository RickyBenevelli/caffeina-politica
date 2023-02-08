import React from 'react'

import {TbCalendarStats} from 'react-icons/tb'

const CalendarData = (props) => {
  return (
    <div>
        <div className='flex flex-row items-start justify-start p-2 py-3 '>
            <div className='p-1'>
              <TbCalendarStats size={20} className=""/>
            </div>
            <div className='flex flex-col items-center justify-start'>
                <h3 className='text-sm lg:text-base xl:text-lg font-semibold capitalize'>{props.data}</h3>
                <p className='text-xs font-light'>Via Fermi 57 RE, ore 19:00</p>
                {/* <p className='font-light text-xs'>ore 19:00</p> */}
            </div>
        </div>
    </div>
  )
}

export default CalendarData