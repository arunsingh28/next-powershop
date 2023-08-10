import React from 'react'
import Navbar from './Navbar'

interface MobileProp {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const menuItem = [
    { title: 'Creator' },
    { title: 'Merchnat' },
    { title: 'Pricing' },
    { title: 'Discover' },
]

const MobileNav: React.FC<MobileProp> = ({ isOpen, setIsOpen }) => {



    return (
        <div className='fixed top-0 left-0 w-full h-screen bg-[#F4F4F4] z-[9999]'>
            <div className='pt-16 pb-5'><Navbar isOpen={isOpen} setIsOpen={setIsOpen} /></div>
            <div className='px-4'>
                <ul>
                    {
                        menuItem && menuItem.map((item, index) => {
                            return (
                                <li key={index} className='border-b border-black py-4 tracking-tighter font-bold text-2xl font-inter'>{item.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default MobileNav