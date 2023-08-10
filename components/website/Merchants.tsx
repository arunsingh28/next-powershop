import React from 'react'
import poster1 from '../../public/tesimonial.png'
import poster2 from '../../public/tesimonial2.png'
import poster3 from '../../public/tesimonial3.png'
import Image, { StaticImageData } from 'next/image'

interface Cards {
    poster: StaticImageData
    title: React.ReactElement
    handle: React.ReactElement
    url: string
}

const Merchants = () => {

    const [cards, setCards] = React.useState<Cards[]>([
        {
            poster: poster1,
            title: <h1 className='card-title font-[900] mt-5'>Wotshop Everything <br />Products</h1>,
            handle: <b>@lizareamlit | <span className='text-orange-400 font-normal'>Fashion</span></b>,
            url: 'https://powershop.link'
        },
        {
            poster: poster2,
            title: <h1 className='card-title font-[900] mt-5'>Everyday Essential <br /> Store</h1>,
            handle: <b>@lizareamlit | <span className='text-orange-400 font-normal'>Fashion</span></b>,
            url: 'https://powershop.link'
        },
        {
            poster: poster3,
            title: <h1 className='card-title font-[900] mt-5'>Gloss Again <br />Glass</h1>,
            handle: <b>@lizareamlit | <span className='text-orange-400 font-normal'>Fashion</span></b>,
            url: 'https://powershop.link'
        }
    ])


    return (
        <div className='py-10 lg:py-40 font-inter'>
            <p className='text-center merchant-heading font-[900] mb-10'>Trusted by 1000+ Merchants</p>
            <div className='flex flex-col justify-center flex-wrap items-center overflow-hidden gap-5 md:justify-between lg:flex-row lg:justify-between'>
                {
                    cards && cards.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='relative product-img-w'>
                                    <Image src={item.poster} alt={`poster${index}`} className='object-contain bg-white image-width' />
                                    <button className='flex items-center gap-3 absolute bottom-3 merchant-btn-txt tracking-tighter right-10 bg-white px-5 py-3 rounded-2xl font-bold sm:right-3'>Shop here today
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19.086" height="18.603" viewBox="0 0 19.086 18.603">
                                            <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M8.115,3.893l.946-.946a1.018,1.018,0,0,1,1.444,0l8.281,8.277a1.018,1.018,0,0,1,0,1.444L10.5,20.95a1.018,1.018,0,0,1-1.444,0L8.115,20a1.024,1.024,0,0,1,.017-1.461l5.133-4.89H1.022A1.02,1.02,0,0,1,0,12.63V11.267a1.02,1.02,0,0,1,1.022-1.022H13.265L8.132,5.354A1.016,1.016,0,0,1,8.115,3.893Z" transform="translate(0 -2.647)" fill="#030303" />
                                        </svg>
                                    </button>
                                </div>
                                {item.title}
                                <div className='mt-3'>{item.handle}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Merchants