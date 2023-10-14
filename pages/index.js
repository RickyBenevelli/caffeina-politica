import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useContext } from 'react'

import { Inter } from '@next/font/google'

import Hero from '../components/Hero'
import HeroArticolo from '../components/HeroArticolo'

const Eventi = dynamic(() => import('../components/Eventi'))
const Articoli = dynamic(() => import('../components/Articoli'))
const AboutUs = dynamic(() => import('../components/AboutUs'))
const Contatti = dynamic(() => import('../components/Contatti'))
const Project = dynamic(() => import('../components/Project'))
import EventContextProvider, {EventContext} from '../components/EventContext'

import {postsPath, postFileNames, sortByDate} from '../utils'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {

  return (
    <>
      {/* <HeroArticolo posts={posts}/> */}
      <Hero/>
      <EventContextProvider>
        <Eventi/>
      </EventContextProvider>
      <Articoli posts={posts}/>
      <Project />
      <AboutUs/>
      <Contatti />
    </>
  )
}

export async function getStaticProps() {

  const posts = postFileNames.map((file) => {
    const content = fs.readFileSync(path.join(postsPath, `${file}`));
    const { data } = matter(content);
    return {
      frontmatter: data,
      slug: file.replace(/\.mdx?$/, ''),
    };
  }).filter((post) => (new Date(post.frontmatter.date) <= new Date() ));

  return {
    props: { 
      posts: JSON.parse(JSON.stringify(posts)).sort(sortByDate) 
    },
  };
}