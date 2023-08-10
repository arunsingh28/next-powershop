import React from 'react'

const FooterNav = () => {
    return (
        <div className='w-full font-inter bg-white rounded-3xl py-10 px-5 mt-20 lg:flex justify-between items-center'>
            <div className='flex justify-between'>
                {/* brand name */}
                <div className='flex items-center lg:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34.745" height="47.219" viewBox="0 0 34.745 47.219">
                        <g id="Group_3" data-name="Group 3" transform="translate(-175.914 -84.27)">
                            <path id="Icon_ionic-md-link" data-name="Icon ionic-md-link" d="M3.355,8.82A5.468,5.468,0,0,1,8.82,3.355h6.93V0H8.82a8.82,8.82,0,0,0,0,17.641h6.93V14.286H8.82A5.468,5.468,0,0,1,3.355,8.82Zm6.726,1.733H25.2V7.088H10.081ZM26.461,0h-6.93V3.355h6.93a5.466,5.466,0,0,1,0,10.931h-6.93v3.355h6.93A8.82,8.82,0,0,0,26.461,0Z" transform="matrix(-0.259, 0.966, -0.966, -0.259, 206.372, 93.122)" fill="#5f1b1b" stroke="#442665" strokeWidth="7" />
                            <path id="Icon_ionic-md-link-2" data-name="Icon ionic-md-link" d="M3.055,8.031A4.979,4.979,0,0,1,8.031,3.055h6.31V0H8.031a8.031,8.031,0,0,0,0,16.062h6.31V13.008H8.031A4.979,4.979,0,0,1,3.055,8.031ZM9.178,9.609H22.946V6.454H9.178ZM24.093,0h-6.31V3.055h6.31a4.976,4.976,0,0,1,0,9.953h-6.31v3.055h6.31A8.031,8.031,0,0,0,24.093,0Z" transform="matrix(-0.259, 0.966, -0.966, -0.259, 205.201, 94.137)" fill="#fff" />
                        </g>
                    </svg>
                    <h1 className='font-bold text-md xl:text-lg'>PowerShop</h1>
                </div>
                <div className='flex gap-4'>
                    <button className='font-inter footer-btn font-semibold px-7 bg-btnGray py-3 rounded-lg tracking-tighter hidden lg:block hero-input-text'>Login</button>
                    <button className='font-inter nav-btn font-semibold bg-btnGray flex items-center justify-center rounded-full social-img-hw tracking-tighter lg:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22.222" height="19.445" viewBox="0 0 22.222 19.445">
                            <path id="Icon_open-account-login" data-name="Icon open-account-login" d="M8.333,0V2.778H19.445V16.667H8.333v2.778H22.222V0Zm2.778,5.556V8.333H0v2.778H11.111v2.778l5.556-4.167Z" />
                        </svg>
                    </button>
                    <button className='font-inter footer-btn px-4 bg-btnYellow py-3 rounded-full font-bold tracking-tighter hero-input-text'>Create your shop</button>
                </div>
            </div>
            <ul className='flex-col items-start lg:flex-row lg:items-center lg:gap-6 hidden lg:flex'>
                <li className='text-xl font-semibold hero-input-text'>Ambassador </li>
                <li className='text-xl font-semibold hero-input-text'>Merchant </li>
                <li className='text-xl font-semibold hero-input-text'>FAQ </li>
            </ul>
            <div className='flex justify-between mt-5'>
                <ul className='flex-col items-start flex lg:flex-row lg:items-center lg:gap-6 lg:hidden'>
                    <li>Ambassador </li>
                    <li>Merchant </li>
                    <li>FAQ </li>
                </ul>
                {/* social links */}
                <div className='flex gap-4 items-center'>
                    {/* twitter */}
                    <div className='h-16 w-16 social-img-hw bg-black flex items-center justify-center rounded-full p-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="54.151" height="43.98" viewBox="0 0 54.151 43.98">
                            <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M48.585,14.342c.034.481.034.962.034,1.443,0,14.672-11.167,31.577-31.577,31.577A31.363,31.363,0,0,1,0,42.379a22.958,22.958,0,0,0,2.68.137,22.227,22.227,0,0,0,13.778-4.742,11.118,11.118,0,0,1-10.377-7.7,14,14,0,0,0,2.1.172,11.738,11.738,0,0,0,2.921-.378A11.1,11.1,0,0,1,2.2,18.98v-.137a11.177,11.177,0,0,0,5.017,1.409A11.115,11.115,0,0,1,3.78,5.408,31.547,31.547,0,0,0,26.663,17.022a12.528,12.528,0,0,1-.275-2.543A11.109,11.109,0,0,1,45.6,6.885a21.851,21.851,0,0,0,7.044-2.68,11.068,11.068,0,0,1-4.879,6.116A22.249,22.249,0,0,0,54.151,8.6a23.857,23.857,0,0,1-5.566,5.738Z" transform="translate(0 -3.381)" fill="#fff" />
                        </svg>
                    </div>
                    {/* instagram */}
                    <div className='h-16 w-16 social-img-hw bg-black flex items-center justify-center rounded-full p-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44 .416" height="44.405" viewBox="0 0 44.416 44.405">
                            <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M22.207,13.055A11.385,11.385,0,1,0,33.592,24.44,11.367,11.367,0,0,0,22.207,13.055Zm0,18.787a7.4,7.4,0,1,1,7.4-7.4,7.415,7.415,0,0,1-7.4,7.4ZM36.714,12.59a2.656,2.656,0,1,1-2.656-2.656A2.649,2.649,0,0,1,36.714,12.59Zm7.54,2.7c-.168-3.557-.981-6.708-3.587-9.3s-5.747-3.409-9.3-3.587c-3.666-.208-14.655-.208-18.321,0-3.547.168-6.7.981-9.3,3.577S.329,11.718.151,15.275C-.057,18.941-.057,29.93.151,33.6c.168,3.557.981,6.708,3.587,9.3s5.747,3.409,9.3,3.587c3.666.208,14.655.208,18.321,0,3.557-.168,6.708-.981,9.3-3.587s3.409-5.747,3.587-9.3c.208-3.666.208-14.645,0-18.311ZM39.518,37.53A7.494,7.494,0,0,1,35.3,41.751c-2.923,1.159-9.859.892-13.089.892s-10.176.258-13.089-.892A7.494,7.494,0,0,1,4.9,37.53c-1.159-2.923-.892-9.859-.892-13.089S3.748,14.264,4.9,11.351A7.494,7.494,0,0,1,9.118,7.13c2.923-1.159,9.859-.892,13.089-.892S32.384,5.981,35.3,7.13a7.494,7.494,0,0,1,4.221,4.221c1.159,2.923.892,9.859.892,13.089S40.677,34.617,39.518,37.53Z" transform="translate(0.005 -2.238)" fill="#fff" />
                        </svg>
                    </div>
                    {/* linkedin*/}
                    <div className='h-16 w-16 social-img-hw bg-black flex items-center justify-center rounded-full p-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43.43" height="43.43" viewBox="0 0 43.43 43.43">
                            <path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin" d="M40.328,2.25H3.092A3.116,3.116,0,0,0,0,5.381V42.549A3.116,3.116,0,0,0,3.092,45.68H40.328a3.124,3.124,0,0,0,3.1-3.131V5.381A3.124,3.124,0,0,0,40.328,2.25Zm-27.2,37.226H6.689V18.75h6.447V39.476ZM9.908,15.919a3.732,3.732,0,1,1,3.732-3.732,3.734,3.734,0,0,1-3.732,3.732ZM37.255,39.476H30.818V29.394c0-2.4-.048-5.5-3.345-5.5-3.354,0-3.868,2.617-3.868,5.322V39.476H17.169V18.75h6.175V21.58h.087a6.78,6.78,0,0,1,6.1-3.344c6.515,0,7.726,4.295,7.726,9.878Z" transform="translate(0 -2.25)" fill="#fff" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterNav