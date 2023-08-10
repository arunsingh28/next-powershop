import React from 'react'

const YearCard = () => {
    return (
        <div className='border-2 border-[#B5B5B5] py-8 px-5 rounded-2xl w-96 text-[#B2B2B2] flex items-center justify-between'>
            <div className='flex gap-3'>
                <input type="radio" className='h-6 w-6 accent-[#B2B2B2]' />
                <h4 className='font-bold tracking-normal'>Yearly</h4>
            </div>
            <div className='flex flex-col items-end'>
                <h3 className='line-through text-lg'>$360/yr</h3>
                <h2 className='font-bold text-2xl'>$300/yr</h2>
            </div>
        </div>
    )
}

export default YearCard