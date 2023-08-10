import React from 'react'
import paymentPoster1 from '../../public/payment1.png'
import paymentPoster2 from '../../public/payment2.png'
import paymentPoster3 from '../../public/payment3.png'
import paymentPoster4 from '../../public/payment4.png'
import Image from 'next/image'

const OverLay = () => {
    return (
        <div className='fixed w-full'>
            <div className='relative hidden lg:block'>
                <Image alt='poster1' src={paymentPoster1} className='absolute -top-56 -left-44 opacity-10 pointer-events-none image-width' />
                <Image alt='poster3' src={paymentPoster3}
                    className='absolute -top-32 -right-40 opacity-10 pointer-events-none image-width'
                />
                <Image alt='poster2' src={paymentPoster2}
                    className='absolute top-[750px] -left-52 opacity-10 pointer-events-none image-width'
                />
                <Image alt='poster4' src={paymentPoster4}
                    className='absolute top-[810px] -right-52 opacity-10 pointer-events-none image-width'
                />
            </div>
        </div>
    )
}

export default OverLay