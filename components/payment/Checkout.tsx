import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CreateButton from './CreateButton';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string)

export const Checkout = () => {
    return (
        <Elements stripe={stripePromise}>
            <CreateButton />
        </Elements>
    )
}