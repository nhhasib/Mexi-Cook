import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white mt-10 pb-10'>
            <div className='text-center py-6 w-11/12 mx-auto'>
            <h1 className="text-orange-700 font-bold text-5xl py-6">MaxCook</h1>
            </div>
            <div className='grid md:grid-cols-3 gap-10 w-11/12 mx-auto'>
                <div>
                    <h5 className='font-bold text-2xl'>About Us</h5>
                    <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta voluptatum doloribus velit quibusdam fugit ipsum atque sequi. Neque non officia porro error assumenda reprehenderit commodi, similique vitae ut veritatis amet.</p>
                </div>
                <div>
                    <h5 className='font-bold text-2xl'>Quick Links</h5>
                    <div className='text-sm flex flex-col'>
                    <a href="">Latest News</a>
                    <a href="">Our Popular Menu</a>
                    <a href="">Pricing Plan</a>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-3xl'>Don't Hesited to Connect with Us</h2>
                    <p>012 987 98754</p>
                </div>
            </div>
            <hr className='w-11/12 mx-auto my-6'/>
            <p className='text-center pb-6'>Copyright © 2023 MaxCook All Right Reserved </p>
        </div>
    );
};

export default Footer;