import React from 'react'

const Presentazione = () => {
  return (
    <div className='flex flex-col md:flex-row items-center'>
        <div className='w-60'>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#0F62FE" d="M48.1,-12.1C56,8.8,51.7,37.1,32.4,53.2C13,69.3,-21.5,73.2,-38,59.5C-54.5,45.8,-52.9,14.6,-43.6,-8.2C-34.3,-31,-17.1,-45.4,1.5,-45.8C20.1,-46.3,40.2,-32.9,48.1,-12.1Z" transform="translate(100 100)" />
            </svg>
        </div>
        <div className='flex flex-col'>
            <h3 className='text-2xl font-semibold'>TOPOLINO</h3>
            <p className='text-md font-normal py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus debitis quos laudantium id. Laboriosam enim velit quas tenetur possimus! Placeat sint aliquam omnis aspernatur dicta! Explicabo ullam voluptatem a aspernatur.</p>
        </div>
    </div>
  )
}

export default Presentazione