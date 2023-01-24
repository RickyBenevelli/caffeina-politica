import React from 'react'

const Title = (props) => {
  return (
    <div>
        <div className='text-center h-20 mx-auto flex items-center justify-center py-10'>
            <h1 className='absolute flex items-center justify-center font-black text-6xl text-blue-900/10'>{props.background}</h1>
            <h2 className='absolute flex items-center justify-center font-bold text-2xl text-[#4D5E80]'>{props.title}</h2>
        </div>
    </div>
  )
}

export default Title