import React from 'react'

const Acknowledge = () => {
    return (
        <div className='flex w-96 font-inter'>
            <input type="checkbox" className='h-4 w-4 accent-[#5F1B1B] border-[#5F1B1B]' />
            <p className='font-semibold text-[12px] ml-2 '>I acknowledge that I have read and understand the <span className='text-[#5F1B1B]'>
                Terms<br />
                of Service</span> and the <span className='text-[#5F1B1B]'>Privacy Policy.</span></p>
        </div>
    )
}

export default Acknowledge