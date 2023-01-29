import React from 'react'
import { Element } from 'react-scroll'
import Presentazione from './Presentazione'
import Title from './Title'

const AboutUs = () => {
  return (
    <Element name='about-us' className='bg-slate-50'>
        <div className='pt-10 lg:px-5 max-w-[1350px] m-auto'>
            <Title title='ABOUT' background='US' />

            <Presentazione reverse={false} image={"/profiles/profilo1.jpeg"}/>
            <Presentazione reverse={true} image={"/profiles/profilo4.jpeg"}/>
            <Presentazione reverse={false} image={"/profiles/profilo2.jpeg"}/>
            <Presentazione reverse={true} image={"/profiles/profilo5.jpeg"}/>
        </div>
    </Element>
  )
}

export default AboutUs