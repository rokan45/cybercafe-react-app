import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingOption = ({ pricingPromise }) => {
    // console.log(pricingPromise)
    const PricingData = use(pricingPromise);
    
    console.log(PricingData)
    return (
        <div className='p-4 border border-amber-200 shadow-2xl'>
            <h2 className='text-4xl text-center font-semibold py-4'>Take Your Plan</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5  py-10'>
                {

                    PricingData.plans.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOption;