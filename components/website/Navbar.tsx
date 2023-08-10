import React from 'react'
import CTAButton from './CTAButton'

interface NavbarProp {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<NavbarProp> = ({ isOpen, setIsOpen }) => {

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }


    React.useEffect(() => {
        const closeNavOnResize = () => {
            setIsOpen(false);
        };

        window.addEventListener('resize', closeNavOnResize);
        return () => {
            window.removeEventListener('resize', closeNavOnResize);
        };
    }, []);

    return (
        <nav className='nav-p bg-white flex items-center justify-between rounded-full mx-2'>
            <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="34.745" height="47.219" viewBox="0 0 34.745 47.219">
                    <g id="Group_3" data-name="Group 3" transform="translate(-175.914 -84.27)">
                        <path id="Icon_ionic-md-link" data-name="Icon ionic-md-link" d="M3.355,8.82A5.468,5.468,0,0,1,8.82,3.355h6.93V0H8.82a8.82,8.82,0,0,0,0,17.641h6.93V14.286H8.82A5.468,5.468,0,0,1,3.355,8.82Zm6.726,1.733H25.2V7.088H10.081ZM26.461,0h-6.93V3.355h6.93a5.466,5.466,0,0,1,0,10.931h-6.93v3.355h6.93A8.82,8.82,0,0,0,26.461,0Z" transform="matrix(-0.259, 0.966, -0.966, -0.259, 206.372, 93.122)" fill="#5f1b1b" stroke="#442665" strokeWidth="7" />
                        <path id="Icon_ionic-md-link-2" data-name="Icon ionic-md-link" d="M3.055,8.031A4.979,4.979,0,0,1,8.031,3.055h6.31V0H8.031a8.031,8.031,0,0,0,0,16.062h6.31V13.008H8.031A4.979,4.979,0,0,1,3.055,8.031ZM9.178,9.609H22.946V6.454H9.178ZM24.093,0h-6.31V3.055h6.31a4.976,4.976,0,0,1,0,9.953h-6.31v3.055h6.31A8.031,8.031,0,0,0,24.093,0Z" transform="matrix(-0.259, 0.966, -0.966, -0.259, 205.201, 94.137)" fill="#fff" />
                    </g>
                </svg>
                <div className='hidden  lg:flex lg:items-center lg:gap-8'>
                    <h1 className='font-extrabold text-linkTextColor tracking-tighter nav-brand-fs h-auto'>PowerShop</h1>
                    {/* submenu */}
                    {/* <div className='font-inter'> */}
                    <ul className='flex gap-8 text-linkTextColor nav-item-w'>
                        <li>Creator</li>
                        <li className='font-bold underline'>Merchant</li>
                        <li>Pricing</li>
                        <li>Discover</li>
                    </ul>
                    {/* </div> */}
                </div>
            </div>
            <div className='flex items-center gap-4'>
                {/* login & create button */}
                <CTAButton />
                {/* hamburger menu */}
                <div className={isOpen ? 'bg-[#442665] h-[47px] w-[47px] flex items-center justify-center rounded-full cursor-pointer' : 'block cursor-pointer lg:hidden'} onClick={toggleNav}>
                    {
                        !isOpen ? <svg width="24" height="30" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11H15M1 6H15M1 1H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> : <svg width="25" height="25" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3 0.710224C13.2075 0.61752 13.0976 0.543973 12.9766 0.493791C12.8556 0.44361 12.7259 0.417779 12.595 0.417779C12.464 0.417779 12.3343 0.44361 12.2134 0.493791C12.0924 0.543973 11.9825 0.61752 11.89 0.710224L6.99998 5.59022L2.10998 0.700223C2.0174 0.607642 1.90749 0.534202 1.78652 0.484097C1.66556 0.433992 1.53591 0.408203 1.40498 0.408203C1.27405 0.408203 1.1444 0.433992 1.02344 0.484097C0.902472 0.534201 0.792561 0.607642 0.699979 0.700223C0.607397 0.792805 0.533957 0.902716 0.483852 1.02368C0.433747 1.14464 0.407959 1.27429 0.407959 1.40522C0.407959 1.53615 0.433747 1.6658 0.483852 1.78677C0.533957 1.90773 0.607397 2.01764 0.699979 2.11022L5.58998 7.00022L0.699979 11.8902C0.607397 11.9828 0.533957 12.0927 0.483852 12.2137C0.433747 12.3346 0.407959 12.4643 0.407959 12.5952C0.407959 12.7262 0.433747 12.8558 0.483852 12.9768C0.533957 13.0977 0.607397 13.2076 0.699979 13.3002C0.792561 13.3928 0.902472 13.4662 1.02344 13.5163C1.1444 13.5665 1.27405 13.5922 1.40498 13.5922C1.53591 13.5922 1.66556 13.5665 1.78652 13.5163C1.90749 13.4662 2.0174 13.3928 2.10998 13.3002L6.99998 8.41022L11.89 13.3002C11.9826 13.3928 12.0925 13.4662 12.2134 13.5163C12.3344 13.5665 12.464 13.5922 12.595 13.5922C12.7259 13.5922 12.8556 13.5665 12.9765 13.5163C13.0975 13.4662 13.2074 13.3928 13.3 13.3002C13.3926 13.2076 13.466 13.0977 13.5161 12.9768C13.5662 12.8558 13.592 12.7262 13.592 12.5952C13.592 12.4643 13.5662 12.3346 13.5161 12.2137C13.466 12.0927 13.3926 11.9828 13.3 11.8902L8.40998 7.00022L13.3 2.11022C13.68 1.73022 13.68 1.09022 13.3 0.710224Z" fill="white" />
                        </svg>

                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar