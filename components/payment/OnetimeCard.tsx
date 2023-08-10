import React from 'react'

const OnetimeCard = () => {
    return (
        <div className='border-2 border-[#5F1B1B] py-10 px-5 shadow-xl rounded-2xl w-96 text-[#5F1B1B] my-7 flex items-center justify-between'>
            <div className='flex gap-3'>
                <input type="radio" className='h-6 w-6 accent-[#5F1B1B]' checked />
                <h4 className='font-bold tracking-normal text-lg font-inter'>One-time</h4>
            </div>
            <div className='flex flex-col items-end'>
                <h2 className='font-bold text-3xl'>$25</h2>
            </div>
        </div>
    )
}

export default OnetimeCard