import React from 'react'


const Footer = () => {
  return (
    <section id='footer' className='w-full p-5 flex flex-col justify-around items-center bg-[#dc6041] text-white'>
      <div className='text-xs'>
        &copy; 2023 Caffeina Politica. All rights reserved.
      </div>
      <div className='text-xs'>
        developed by <a href='' className='font-medium'>Riccardo Benevelli</a>
      </div>
    </section>
  )
}

export default Footer