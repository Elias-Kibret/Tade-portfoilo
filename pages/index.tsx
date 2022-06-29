import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Links from '../components/Links'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <About/>
       <Links/>
    </div>
  )
}

export default Home
