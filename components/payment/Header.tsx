import React from 'react'

const Header = () => {
    return (
        <div className='pt-10 font-inter'>
            <div className='px-10 flex items-center gap-2 sm:px-64 xl:px-96 text-[#5F1B1B]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="7.929" height="13.073" viewBox="0 0 7.929 13.073">
                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M12.186,16.036,16.72,11.5a.853.853,0,0,1,1.21,0,.864.864,0,0,1,0,1.214l-5.138,5.142a.855.855,0,0,1-1.182.025L6.437,12.716A.857.857,0,0,1,7.648,11.5Z" transform="translate(18.675 -5.688) rotate(90)" fill="#5f1b1b" stroke="#5f1b1b" stroke-width="1" />
                </svg>
                <span className='font-bold'>Back</span>
            </div>
            <h1 className='text-center payment-heading font-bold tracking-tighter pt-10'>Create<br />
                your online shop</h1>
            <p className='text-center payment-p-heading mt-3'>Create and curate your online store!</p>
        </div>
    )
}

export default Header