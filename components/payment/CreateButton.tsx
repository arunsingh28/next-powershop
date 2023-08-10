import React from 'react'
import Sucees from './Suceess'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';



const CreateButton = () => {
    const stripe = useStripe();
    const elements = useElements();


    const [isSuccess, setIsSuccess] = React.useState<boolean>(false)

    const handleCreateStore = async () => {
        if (!stripe || !elements) {
            return;
        }
        //    create new payment
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)!
        })

        if (error) {
            alert(error.message)
            console.log(error)
        }
        else {
            setIsSuccess(true)
        }
    }

    return (
        <div className='w-96 py-8 font-inter'>
            <CardElement className='h-14 border-2' />
            <button onClick={handleCreateStore} className='text-[#5F1B1B] font-bold text-xl bg-[#F6EDE6] rounded-2xl w-full py-5' disabled={!stripe}>Create your store</button>
            <div className='pt-4 pb-16'>
                <ul className='flex items-center justify-center text-[#5F1B1B]'>
                    <li>Terms of Service</li>
                    <li className='px-2'>|</li>
                    <li> Privacy Policy</li>
                    <li className='px-2'>|</li>
                    <li> Logout</li>
                </ul>
            </div>
            {isSuccess && <Sucees />}
        </div>
    )
}

export default CreateButton