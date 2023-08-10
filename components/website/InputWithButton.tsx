import React from 'react'

const InputWithButton = () => {
    return (
        <div className='relative my-5 font-inter hero-input-text w-6/7 lg:w-full'>
            <input type="text" className='w-full input-p rounded-full text-black placeholder:font-bold' placeholder='Enter your email to start' />
            <button className='font-inter font-semibold bg-btnYellow rounded-full text-black absolute top-1 right-1 tracking-tighter input-btn-inside'>Claim your shop</button>
        </div>
    )
}

export default InputWithButton