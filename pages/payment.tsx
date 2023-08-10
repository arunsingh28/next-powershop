import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Acknowledge from '../components/payment/Acknowledge'
import OnetimeCard from '../components/payment/OnetimeCard'
import PointsCard from '../components/payment/PointsCard'
import OverLay from '../components/payment/OverLay'
import YearCard from '../components/payment/YearCard'
import CreditCard from '../components/payment/CreditCard'
import Header from '../components/payment/Header'
import { Checkout } from '../components/payment/Checkout'



const payment: NextPage = () => {
    return (
        <div className='overflow-hidden'>
            <Head>
                <title>PowerShop | payment</title>
            </Head>
            <OverLay />
            <Header />
            <div className='flex flex-col justify-center items-center'>
                <PointsCard />
                <YearCard />
                <OnetimeCard />
                <CreditCard />
                <Acknowledge />
                <Checkout />
            </div>
        </div>
    )
}

export default payment