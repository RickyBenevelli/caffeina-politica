import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useContext } from 'react'

import { Inter } from '@next/font/google'

import Hero from '../components/Hero'

const Eventi = dynamic(() => import('../components/Eventi'))
const Articoli = dynamic(() => import('../components/Articoli'))
const AboutUs = dynamic(() => import('../components/AboutUs'))
const Contatti = dynamic(() => import('../components/Contatti'))
import EventContextProvider, {EventContext} from '../components/EventContext'

import {postsPath, postFileNames, sortByDate} from '../utils'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {
  const {selected, setSelected} = useContext(EventContext) // NOTE: rimuovere se non serve
  return (
    <>
      <Hero/>
      <EventContextProvider>
        <Eventi/>
      </EventContextProvider>
      <Articoli posts={posts}/>
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
  });

  return {
    props: { 
      posts: JSON.parse(JSON.stringify(posts)).sort(sortByDate) 
    },
  };
}