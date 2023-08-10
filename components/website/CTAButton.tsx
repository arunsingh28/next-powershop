import React from 'react'

const CTAButton = () => {
    return (
        <React.Fragment>
            <button className='font-inter h-full nav-btn-login font-semibold px-7 bg-btnGray py-3 rounded-lg tracking-tighter'>Login</button>
            <button className='font-inter h-full nav-btn px-4 bg-btnYellow py-3 rounded-full font-bold tracking-tighter'>Create your shop</button>
        </React.Fragment>
    )
}

export default CTAButton