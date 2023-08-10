import React from 'react'
import Image from 'next/image'
import brandImage from '../../public/brand.png'


const Brand = () => {
    return (
        <div className='font-inter flex flex-col justify-between items-start py-40 sm:flex-row md:flex-row lg:items-center'>
            <div className='font-inter text-black mx-2 px-2'>
                <p className="font-[900] hero-heading font-inter">
                    Build, activate &<br />
                    increase your  brand<br />
                    awareness
                </p>
                <p className='hero-sub-heading font-inter mt-3'>Empower your loyal customers, creators and influencers<br />
                    to promote and sell your brand and products
                </p>
                <div className='my-5 hero-input-text'>
                    <button className='font-inter font-bold claim-btn bg-btnPink sm:bg-btnPurple sm:font-semibold rounded-full text-black tracking-tighter'>Claim your shop</button>
                </div>
            </div>
            <Image src={brandImage} alt='hero_poster' className='pointer-events-none image-width' />
        </div >
    )
}

export default Brand