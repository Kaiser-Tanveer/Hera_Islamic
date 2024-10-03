import React from 'react';
import { HiBell, HiUser } from 'react-icons/hi';
import { HiUserCircle } from 'react-icons/hi2';

const Navbar = () => {
    return (
        <div className='h-[80px] flex items-center justify-between px-6 drop-shadow-md'>
            <p className='text-blue-500 font-bold text-2xl uppercase'>Hera Islamic Academy</p>
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