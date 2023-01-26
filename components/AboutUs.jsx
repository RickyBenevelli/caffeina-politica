import React from 'react'
import Presentazione from './Presentazione'
import Title from './Title'

const AboutUs = () => {
  return (
    <section id='about-us' className='bg-slate-50'>
        <div className='pt-10 lg:px-5 max-w-[1350px] m-auto'>
            <Title title='ABOUT' background='US' />

            <Presentazione reverse={false} image={"/profiles/profilo1.avif"}/>
            <Presentazione reverse={true} image={"/profiles/profilo4.jpeg"}/>
            <Presentazione reverse={false} image={"/profiles/profilo2.avif"}/>
            <Presentazione reverse={true} image={"/profiles/profilo5.jpeg"}/>
        </div>
    </section>
  )
}

export default AboutUs