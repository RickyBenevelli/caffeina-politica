import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import dayjs from 'dayjs';
import 'dayjs/locale/it';

import {IoIosArrowForward} from 'react-icons/io'

const HeroArticolo = ({posts}) => {

  return (
    <section id='home' className={`bg-gradient-to-br from-[#dc6041] via-[#e6a24f] to-[#dc6041] `}>

            <div className='pt-24 lg:pt-[5.5]'>

                <div className='sm:hidden pb-5'>
                    <div className='font-black text-4xl text-center py-3 sm:text-5xl md:text-6xl md:pt-8 lg:text-5xl xl:text-6xl '>
                        <h1>Caffeina Politica</h1>
                    </div>

                    <div className='font-semibold text-2xl text-center sm:text-3xl md:text-3xl py-2 md:py-3'>
                        <h2>Lo Spazio di dibattito pubblico</h2>
                    </div>
                </div>

                <div className='relative '>
                

                    {/* Contenitore generale */}
                    <div className='flex flex-col pb-14 text-slate-900 px-5 max-w-[1350px] m-auto relative z-10' >

                        <div className='w-full max-sm:hidden'>
                            <div className='font-black text-4xl text-center py-3 sm:text-5xl md:text-6xl md:pt-8 lg:text-5xl xl:text-6xl bg-clip-text bg-gradient-to-r from-amber-700  to-orange-500 text-transparent'>
                                <h1>Caffeina Politica</h1>
                            </div>

                            <div className='font-semibold text-2xl text-center sm:text-3xl md:text-3xl py-2 md:py-3 text-orange-200'>
                                <h2>Lo Spazio di dibattito pubblico</h2>
                            </div>
                        </div>
                        
                        <div className='max-sm:w-full w-1/2 lg:w-1/3 flex flex-col text-base  sm:mt-10 lg:mx-5 text-white'>
                            <div className='w-full text-center font-semibold text-3xl  py-6'>
                                {posts[0].frontmatter.title}
                            </div>

                            <div className='flex flex-row justify-between w-full'>
                                <div>
                                    Scritto da {posts[0].frontmatter.author}
                                </div>
                                <div>
                                    {dayjs(posts[0].frontmatter.date).locale('it').format('D MMMM YYYY')}
                                </div>
                            </div>
                            <br/>

                            <div className='w-full text-justify font-light'>
                                {posts[0].frontmatter.excerpt}
                            </div>

                            <div className='w-full flex flex-col justify-center items-center'>
                                <button className='bg-orange-500 px-3 py-1 rounded-md my-5'>
                                    <Link href={`/posts/${posts[0].slug}`} className='flex flex-row items-center'>
                                        <p>
                                            Leggi l&apos;articolo
                                        </p>
                                        <IoIosArrowForward className='inline-block ml-2' size={20}/>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <Image src={posts[0].frontmatter.image} alt="foto ultimo articolo" className={`z-0 brightness-[0.6] object-cover`} fill style={{objectFit: 'cover'}} priority />


                </div>
            </div>
    </section>
  )
}

export default HeroArticolo