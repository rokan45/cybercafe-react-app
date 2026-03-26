import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "About",
        path: "/about",
    },
    {
        id: 3,
        name: "Category",
        path: "/category",
    },
    {
        id: 4,
        name: "Branches",
        path: "/branches",
    },
    {
        id: 5,
        name: "Blog",
        path: "/blog",
    },
    {
        id: 6,
        name: "Contact",
        path: "/contact",
    },
];

const Navbar = () => {

    const [open, setOpen] = useState(false);


    return (
        <nav className='relative'>

            <div className='flex items-center justify-between mx-auto p-7 '>
                {/* logo */}
                <div className=''>
                    <span onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>
                        {open ? <X /> : <Menu />}
                    </span>

                    <h1 className='text-xl hidden md:block'>
                        <span className='text-2xl font-extrabold'>B</span>ig
                        <span className='text-2xl font-extrabold'>B</span>rain
                    </h1>
                </div>

                {/* Desktop link */}
                <div className='hidden md:block'>
                    <ul className='flex'>
                        {
                            navLinks.map(link => (<li key={link.id} className='mr-3 cursor-pointer font-medium hover:text-blue-500 transition'>{link.name}</li>))
                        }
                    </ul>
                </div>

                {/* Logout Button */}
                <div>
                    <button className='btn btn-primary'>Logout</button>
                </div>
            </div>

            {/* Mobile drop down menu */}
            {
                open && (<ul className='md:hidden bg-white shadow-md px-7 py-4 absolute w-full top-18    left-0 z-10 gap-4'>
                    {
                        navLinks.map(link => (<li key={link.id} className='cursor-pointer font-medium hover:text-blue-500 transition' onClick={() => setOpen(false)} >{link.name}</li>))
                    }
                </ul>)
            }
        </nav>
    );
};

export default Navbar;