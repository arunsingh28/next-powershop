import React from 'react'
import InputWithButton from './InputWithButton'
import FooterNav from './FooterNav'

const Footer = () => {
    return (
        <div className='relative py-36 overflow-hidden z-50'>
            <div className='w-full mx-auto lg:w-2/3'>
                <p className='text-center footer-heading font-[900] text-[#E4BBE3] font-inter'>Sign up as a merchant & get more leads & sales!</p>
                <div className='w-full mx-auto lg:w-2/3 px-2 lg:px-auto'>
                    <InputWithButton />
                </div>
            </div>
            <div className='py-10 px-2 lg:px-auto'>
                <FooterNav />
            </div>
        </div>
    )
}

export default Footer