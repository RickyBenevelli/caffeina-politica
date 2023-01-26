import Head from 'next/head'

import { Inter } from '@next/font/google'

import Hero from '../components/Hero'
import Eventi from '../components/Eventi'
import Grid from '../components/Grid'
import Articoli from '../components/Articoli'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Contatti from '../components/Contatti'

import {postsPath, postFileNames, sortByDate} from '../utils'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {
// console.log(posts)
  return (
    <>
      <Hero/>
      <Eventi/>
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
    props: { posts: JSON.parse(JSON.stringify(posts)).sort(sortByDate) },
  };
}