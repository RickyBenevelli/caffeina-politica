import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../public/logo.png"

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('black')

    const handleNav = () => {
        setNav(!nav)
    }
    
    useEffect(() => {
        const changeColor = () =>{
            if(window.scrollY >= 30){
                setColor('#FFFAF2')
                setTextColor('black')
            } 
            // else if(window.scrollY >= 100 &&window.scrollY < 200){
            //     setColor('#3C323A')
            //     setTextColor('white')
            // }
            else {
                setColor('transparent')
                setTextColor('black')
            }
        }
        window.addEventListener('scroll', changeColor)
    })

    return (
        <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-50 ease-in duration-300'>
            <div className='max-w-[1350px] m-auto flex justify-between items-center p-5 pb-1 xl:p-5' >
                <Link href='/'>
                <Image src={Logo} alt="logo" className='rounded-xl drop-shadow-2xl w-36 md:w-52'/>
                    
                </Link>
                <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
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

                {/*Mobile Button*/}
                <div onClick={handleNav} className='block sm:hidden z-50 p-6'>
                    {nav 
                    ? <AiOutlineClose className=' text-white' size={30} style={{color: `${!textColor}`}}/> 
                    : <AiOutlineMenu className=' text-black' size={30}style={{color: `${textColor}`}}/>}
                </div>
                {/*Mobile Menu*/}
                <div className={
                    nav
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white' 
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white'}>
                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#eventi'>Eventi</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#articoli'>Articoli</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#about-us'>About Us</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#contatti'>Contatti</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
    }

export default NavBar