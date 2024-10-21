import React, { useState } from 'react';
import { HiBell, HiLogout } from 'react-icons/hi';
import { HiUserCircle } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import logo from '../../Assets/heraIcon.jpeg';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
    const [userShow, setUserShow] = useState(false)
    return (
        <div onClick={()=>{if(userShow){setUserShow(false)}}} className='navbar h-[80px] flex items-center justify-between px-6'>
            <Link to="/dashboard" className='flex items-center gap-2 text-sky-500 font-bold text-2xl uppercase cursor-pointer'>
            <img src={logo} alt="" className='w-12' />
            <h2>HERA ISLAMIC</h2>
            </Link>
            <div className='flex items-center gap-4 justify-end text-2xl'>
                <div className='flex items-center gap-2'>
                    <HiBell/>
                </div>
                <div onClick={()=> setUserShow(!userShow)} className='flex items-center gap-2'>
                    <HiUserCircle/>
                </div>
            </div>
            {
            userShow &&
             <div className='absolute top-14 right-6 py-6 px-2 flex flex-col gap-4 bg-white border border-sky-200 rounded-md shadow-md'>
                <button className='bg-sky-50 text-sky-500 rounded-md px-4 flex items-center gap-2'><FaUserAlt/> Profile</button>
                <button className='bg-red-50 text-red-500 rounded-md px-4 flex items-center gap-2'><HiLogout/> Logout</button>
            </div>
            }
        </div>
    );
};

export default Navbar;