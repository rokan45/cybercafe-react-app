import React from 'react';
import Feature from './feature';

const PricingCard = ({ pricing }) => {
    console.log(pricing)
    const { name, price, currency, tagline, features, cta, highlighted } = pricing
    return (
        <div className={`relative border p-6 rounded-xl flex flex-col gap-4 transition-all duration-300
            ${highlighted
                ? 'border-blue-500 border-2 shadow-2xl scale-105 bg-white'
                : 'border-gray-200 shadow-lg hover:shadow-md bg-white'
            }`}>
            <h1 className='text-xl font-bold text-center'>{name}</h1>
            <div className='mt-2 text-center'>
                <h2 className='text-2xl font-semibold'>{price}{currency}<span className='text-sm'>/mo</span></h2>
                <h2 className='text-sm'>+3 mo free</h2>
            </div>
            <h2 className='p-3 bg-gray-100 rounded-md text-[12px] mt-4'>{tagline}</h2>
            <div>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='btn mt-7 w-full'>{cta}</button>
        </div>
    );
};

export default PricingCard;