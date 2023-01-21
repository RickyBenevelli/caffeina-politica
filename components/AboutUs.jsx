import React from 'react'
import Presentazione from './Presentazione'
import Title from './Title'

const AboutUs = () => {
  return (
    <section id='about-us' className='bg-slate-50'>
        <div className='pt-10 px-5 '>
            <Title title='ABOUT' background='US' />

            <Presentazione />
            <Presentazione />
            <Presentazione />
            <Presentazione />
        </div>
    </section>
  )
}

export default AboutUs