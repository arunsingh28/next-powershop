import React from 'react'
import Image from 'next/image'
import storeImage from '../../public/store.png'

const Store = () => {
    return (
        <div className='font-inter flex flex-col justify-between items-center py-10 lg:py-40 sm:flex-row-reverse md:flex-row-reverse'>
            <div className='font-inter text-black mx-2 px-2'>
                <p className="font-[900] hero-heading font-inter">
                    Enjoy the benefit of<br />
                    affiliate marketing on<br />
                    steroids without the<br />
                    hustle and the cost
                </p>
                <p className='hero-sub-heading font-inter mt-3'>Reap the rewards of affiliate marketing programs without theb<br />
                    effort, cost and technical know-how of creating one from scratch
                </p>
                <div className='my-5 hero-input-text flex item-center justify-center sm:flex sm:items-start sm:justify-start'>
                    <button className='font-inter font-bold claim-btn bg-btnPink sm:bg-btnPurple sm:font-semibold rounded-full text-black tracking-tighter'>Claim your shop</button>
                </div>
            </div>
            <div>
                <Image src={storeImage} alt='hero_poster' className='pointer-events-none image-width' />
            </div>
        </div >
    )
}

export default Store

