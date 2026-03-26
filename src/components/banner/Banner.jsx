import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* Hero Banner */}
            <div className="hero bg-base-200 py-20 gap-5 ">
                <div className="hero-content flex-col lg:flex-row ml-5">
                    <img
                        src="/src/assets/image.png"
                        className="max-w-sm rounded-lg shadow-2xl border-4 border-lime-300"
                    />
                    <div className='ml-5'>
                        <h1 className="text-4xl font-bold">Plug In and Explore World!</h1>
                        <p className="py-4 text-balance leading-5 text-gray-500">
                            Knowledge is power when you have it. To get this unlimited power, you need to just to step from your home.
                            The City's Fastest Cyber Cafe.
                            Reliable connections, modern PCs, and a welcoming environment — open 7 days a week.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;