import React, { useState } from 'react'

const CreditCard = () => {
    const [cardNumber, setCardNumber] = useState<string>()
    const [mmyy, setMMYY] = useState<string>()
    const [cvc, setCVC] = useState<string>()


    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputNumber = e.target.value.replace(/\s/g, ''); // Remove any existing spaces
        if (/^\d{0,16}$/.test(inputNumber)) { // Limit to maximum 16 digits
            const formattedNumber = inputNumber
                .replace(/\s/g, '')
                .match(/.{1,4}/g)?.join(' ');
            setCardNumber(formattedNumber || '');
        }
    }

    const handleMMYYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const cleanedInput = input.replace(/[^\d/]/g, ''); // Remove non-digit and non-slash characters

        if (/^\d{0,4}$/.test(cleanedInput)) {
            const formattedInput = cleanedInput
                .padStart(4, '0')
                .replace(/(\d{2})(\d{2})/, '$1 / $2'); // Add space and / after 2nd digit
            setMMYY(formattedInput);
        }
    }

    const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cleanedInput = e.target.value.replace(/[^\d]/g, ''); // Remove non-digit characters
        if (/^\d{0,3}$/.test(cleanedInput)) {
            setCVC(cleanedInput);
        }
    }


    return (
        <div className='flex flex-col w-96'>
            <div className='flex items-start justify-start'>
                <h6 className='font-bold text-[#5F1B1B] pb-3'>Credit Card Payment</h6>
            </div>
            <div className='border-2 rounded-xl'>
                <input type="text" value={cardNumber} onChange={handleCardNumberChange} className='w-full h-14 px-4 rounded-2xl outline-none font-mono' placeholder='1234 1234 1234 1234' />
                <div className='flex border-t-2'>
                    <div className='flex-1 px-4'>
                        <input type="text" value={mmyy} onChange={handleMMYYChange} placeholder='MM / YY' className='w-full h-14 rounded-2xl outline-none font-mono' />
                    </div>
                    <div className='flex-1 border-l-2 pl-4'>
                        <input type="text" value={cvc} onChange={handleCVCChange} placeholder='CVC' max={3} className='h-14 rounded-2xl outline-none font-mono' />
                    </div>
                </div>
            </div>
            <div className='text-[#8B8B8B] font-inter font-bold py-3'>
                <p className='text-sm'>Secure Payment Powered by  <span className='ml-2 font-extrabold'>Stripe</span></p>
            </div>
        </div>
    )
}

export default CreditCard