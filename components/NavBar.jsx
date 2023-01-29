import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
import Image from 'next/image'
import Logo from "../public/logo.png"

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(false) //true if nav is open
    
    const [color, setColor] = useState('bg-transparent')
    const [textColor, setTextColor] = useState('black')

    const handleNav = () => {
        setNav(!nav)
    }
    
    useEffect(() => {
        const changeColor = () =>{
            if(window.scrollY >= 30){
                setColor('bg-white')
                // setTextColor('black')
            } 
            // else if(window.scrollY >= 100 &&window.scrollY < 200){
            //     setColor('#3C323A')
            //     setTextColor('white')
            // }
            else {
                setColor('bg-transparent')
                // setTextColor('black')
            }
        }
        window.addEventListener('scroll', changeColor)
    })

    return (
        <div className={`${nav ? color : color }  fixed left-0 top-0 w-full transition-all duration-200 ease-in z-50`}>
            <nav className={`${nav ? "max-lg:bg-slate-700 h-screen items-start lg:h-auto lg:items-center" : "items-center" } max-w-[1350px] m-auto flex flex-wrap lg:flex-row justify-between  p-5  lg:p-0 lg:px-5`}>
                <div className='w-full lg:w-auto flex lg:block items-center justify-between z-[100]'>
                    <Link href='/'>
                        <Image src={Logo} alt="logo" className='rounded-xl shadow-md shadow-gray-900 w-36 md:w-52 hover:shadow-lg hover:shadow-gray-900'/>
                    </Link>
                    {
                        nav ? <AiOutlineClose size={20} className="block text-white lg:hidden" onClick={handleNav}/> 
                            : <AiOutlineMenu size={20} className="block lg:hidden" onClick={handleNav}/> 
                    }
                </div>
                <ul className={`${!nav ? "hidden " : "" }  bg-slate-700 lg:bg-transparent absolute lg:static lg:flex lg:justify-between lg:items-center left-0 w-full lg:w-auto mt-[2rem] md:mt-[4rem] lg:mt-0 text-white text-opacity-80 lg:text-black px-6 py-2 lg:py-4 md:px-10 lg:p-2 transition-all ease-in duration-300`}>
                    <li className='p-4 lg:px-10 hover:text-slate-600 border-b border-blue-50 lg:border-0 cursor-pointer' onClick={handleNav}>
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={200}>Home</Link>
                    </li>
                    <li className='p-4 lg:px-10 hover:text-slate-600 border-b border-blue-50 lg:border-0 cursor-pointer' onClick={handleNav}>
                        <Link activeClass="active" to="eventi" spy={true} smooth={true} offset={-80} duration={200}>Eventi</Link>
                    </li>
                    <li className='p-4 lg:px-10 hover:text-slate-600 border-b border-blue-50 lg:border-0 cursor-pointer' onClick={handleNav}>
                        <Link activeClass="active" to="articoli" spy={true} smooth={true} offset={-80} duration={200}>Articoli</Link>
                    </li>
                    <li className='p-4 lg:px-10 hover:text-slate-600 border-b border-blue-50 lg:border-0 cursor-pointer' onClick={handleNav}>
                        <Link activeClass="active" to="about-us" spy={true} smooth={true} offset={-80} duration={200}>About Us</Link>
                    </li>
                    <li className='p-4 lg:px-10 hover:text-slate-600 border-b border-blue-50 lg:border-0 cursor-pointer' onClick={handleNav}>
                        <Link activeClass="active" to="contatti" spy={true} smooth={true} offset={-80} duration={200}>Contatti</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
    }

export default NavBar