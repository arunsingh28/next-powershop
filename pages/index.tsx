import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Navbar from '../components/website/Navbar'
import Hero from '../components/website/Hero'
import Store from '../components/website/Store'
import Brand from '../components/website/Brand'
import Merchants from '../components/website/Merchants'
import Footer from '../components/website/Footer'
import OverLay from '../components/website/OverLay'
import MobileNav from '../components/website/MobileNav'

const Home: NextPage = () => {

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className=''>
      <Head>
        <title>PowerShop</title>
        <meta name="description" content="PowerShop" />
      </Head>
      <div className='bg-[#442665] px'>
        <div className='py-16'>
          <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
          {isOpen && <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />}
          <Hero />
        </div>
      </div>
      <div className='bg-white px'>
        <div className='py-4 mx-auto'>
          <Store />
          <Brand />
        </div>
      </div>
      <div className='bg-[#FEDFD2] px'>
        <div className='py-4 mx-auto'>
          <Merchants />
        </div>
      </div>
      <div className='bg-[#442665] px relative overflow-hidden'>
        <div className='py-4'>
          <Footer />
        </div>
        {/* overlay */}
        <OverLay />
      </div>
    </div>
  )
}

export default Home
