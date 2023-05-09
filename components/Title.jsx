import React from 'react'

const Title = (props) => {
  return (
    <div className='lg:pb-8'>
        <div className='text-center h-20 mx-auto flex items-center justify-center py-10'>
            <h2 className='absolute flex items-center justify-center font-black text-6xl text-blue-900/10'>{props.background}</h2>
            <h3 className='absolute flex items-center justify-center font-bold text-2xl text-[#4D5E80]'>{props.title}</h3>
        </div>
    </div>
  )
}

export default Title