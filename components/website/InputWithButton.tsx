import React from 'react'

const InputWithButton = () => {
    return (
        <div className='relative my-5 font-inter hero-input-text w-6/7 lg:w-full'>
            <input type="text" className='w-full py-5 rounded-full px-3 text-black placeholder:font-bold input-p' placeholder='Enter your email to start' />
            <button className='font-inter font-semibold input-btn-inside bg-btnYellow rounded-full text-black absolute top-0 right-1 tracking-tighter sm:top-0.5'>Claim your shop</button>
        </div>
    )
}

export default InputWithButton