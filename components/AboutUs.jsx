import React from 'react'
import Presentazione from './Presentazione'

const AboutUs = () => {
  return (
    <section id='about-us' className='bg-slate-50'>
        <div className='pt-10 px-5 '>
            <h1 className='text-center font-semibold text-6xl'>ABOUT US</h1>

            <Presentazione />
            <Presentazione />
            <Presentazione />
            <Presentazione />
        </div>
    </section>
  )
}

export default AboutUs