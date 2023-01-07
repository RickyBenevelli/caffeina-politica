import React from 'react'
import Link from 'next/link'

const Grid = () => {
  return (
    <div>
        <nav className=" max-w-[1350px] flex flex-wrap lg:flex-row justify-between items-center p-5">
          <div className='w-full lg:w-auto flex lg:block items-center justify-between z-10'>
            Ciao
          </div>
          <div>
            <ul className={` bg-slate-800  lg:flex left-0 w-full lg:w-auto mt-[20rem] md:mt-[24rem] lg:mt-0 text-white pl-6 md:pl-10 transition-all ease-in duration-300 py-4`}>
              
              <li className='p-4'>
                  <Link href='/'>Home</Link>
              </li>
              <li className='p-4'>
                  <Link href='/#eventi'>Eventi</Link>
              </li>
              <li className='p-4'>
                  <Link href='/#articoli'>Articoli</Link>
              </li>
              <li className='p-4'>
                  <Link href='/#about-us'>About Us</Link>
              </li>
              <li className='p-4'>
                  <Link href='/#contatti'>Contatti</Link>
              </li>
            </ul>
          </div>
          
        </nav>
    </div>
  )
}

export default Grid