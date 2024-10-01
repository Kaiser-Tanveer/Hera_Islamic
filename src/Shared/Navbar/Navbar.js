import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <div className='h-[80px] flex items-center justify-between px-6 drop-shadow-md'>
            <p className='text-blue-500 font-semibold text-2xl'>Hera Islamic Academy</p>
            <div className='flex items-center gap-4 justify-end'>
                <div className='flex items-center gap-2'>
                    <FaUser/>
                    Profile
                </div>
                <div className='flex items-center gap-2'>
                    <FaBell/>
                    Notifications
                </div>
            </div>
        </div>
    );
};

export default Navbar;