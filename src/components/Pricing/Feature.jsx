import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {
    console.log(feature);
    return (
       <p className='flex gap-2 mt-2 text-sm'><CircleCheckBig/> {feature}</p>
    );
};

export default Feature;