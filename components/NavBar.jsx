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
        <div className={`${ color }  fixed left-0 top-0 w-full transition-all duration-200 ease-in z-50`}>
            <nav className={`${nav ? "max-lg:bg-slate-700" : ""} flex flex-col lg:flex-row m-auto justify-between items-center p-5 lg:px-5 max-w-[1350px]`}>
                <div className={`w-full flex lg:w-auto items-center justify-between ${nav ? "max-lg:pb-4" : ""}`}>
                    <Link href='/'>
                        <Image src={Logo} alt="logo" className='rounded-xl shadow-md shadow-gray-900 w-36 md:w-52 hover:shadow-lg hover:shadow-gray-900'/>
                    </Link>
                    {
                        nav ? <AiOutlineClose size={20} className="block text-slate-100 lg:hidden" onClick={handleNav}/> 
                            : <AiOutlineMenu size={20} className="block lg:hidden" onClick={handleNav}/> 
                    }
                </div>
                <ul className={`${nav ? "" : "max-lg:hidden" } flex flex-col items-center max-lg:text-slate-100 lg:flex-row max-lg:w-5/6 text-left`}>
                    <li className='p-4 lg:px-10 hover:text-slate-600 border-b border-slate-300/80 lg:border-0 cursor-pointer max-lg:w-full' onClick={handleNav}>
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={200} onClick={handleNav}>Home</Link>
                    </li>
                    <li className='p-4 lg:px-10 hover:text-slate-600 border-b border-slate-300/80 lg:border-0 cursor-pointer max-lg:w-full' onClick={handleNav}>
                        <Link activeClass="active" to="eventi" spy={true} smooth={true} offset={-80} duration={200} onClick={handleNav}>Eventi</Link>
                    </li>
                    <li className='p-4 lg:px-10 hover:text-slate-600 border-b border-slate-300/80 lg:border-0 cursor-pointer max-lg:w-full' onClick={handleNav}>
                        <Link activeClass="active" to="articoli" spy={true} smooth={true} offset={-80} duration={200} onClick={handleNav}>Articoli</Link>
                    </li>
                    <li className='p-4 lg:px-10 hover:text-slate-600 border-b border-slate-300/80 lg:border-0 cursor-pointer max-lg:w-full' onClick={handleNav}>
                        <Link activeClass="active" to="about-us" spy={true} smooth={true} offset={-80} duration={200} onClick={handleNav}>About Us</Link>
                    </li>
                    <li className='p-4 lg:px-10 hover:text-slate-600 border-b border-slate-300/80 lg:border-0 cursor-pointer max-lg:w-full' onClick={handleNav}>
                        <Link activeClass="active" to="contatti" spy={true} smooth={true} offset={-80} duration={200} onClick={handleNav}>Contatti</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
    }

export default NavBar