import React from 'react'
import Image from 'next/image'
import heroImage from '../../public/hero.png'
import InputWithButton from './InputWithButton'


const Header = () => {
    return (
        <div className='flex flex-col justify-between items-start py-5 px-2 lg:flex-row sm:items-center lg:py-10'>
            <div className='font-inter text-[#E4BBE3] py-10 lg:py-20 px-2 w-full lg:w-auto'>
                <p className="font-[900] hero-heading font-inter">
                    Sell more products<br />
                    partnering with<br />
                    loyal customers,<br />
                    creators and<br />
                    influencers!
                </p>
                <p className='hero-sub-heading font-inter my-7'>Maximize your sales potential by easily setting up your<br />
                    own online store, uploading your inventory, and enabling<br />
                    others to sell from your stock.
                </p>
                <InputWithButton />
            </div>
            <div>
                <Image src={heroImage} alt='hero_poster' className='pointer-events-none image-width' />
            </div>
        </div >
    )
}

export default Header