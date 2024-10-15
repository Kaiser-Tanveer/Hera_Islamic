import React from 'react';
import { HiBell } from 'react-icons/hi';
import { HiUserCircle } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar h-[80px] flex items-center justify-between px-6 drop-shadow-md'>
            <Link to="/dashboard" className='text-sky-500 font-bold text-2xl uppercase cursor-pointer'>Hera Islamic Academy</Link>
            <div className='flex items-center gap-4 justify-end text-2xl'>
                <div className='flex items-center gap-2'>
                    <HiUserCircle/>
                </div>
                <div className='flex items-center gap-2'>
                    <HiBell/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;