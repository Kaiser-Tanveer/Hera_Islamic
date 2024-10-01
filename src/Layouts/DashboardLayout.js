import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Sidebar from '../Shared/Sidebar/Sidebar';

const DashboardLayout = () => {
    return (
        <div>
        <div className=''>
            <div className='bg-white drop-shadow-md'>
            <Navbar/>
            </div>
            <div className='lg:grid lg:grid-cols-12'>
                <div className='lg:col-span-2 pl-6 bg-white h-[100vh] overflow-hidden'>
                    <Sidebar/>
                </div>
                <div className='col-span-12 lg:col-span-10 container mx-auto'>
                    <div className='bg-gray-50 px-6 h-[100vh] py-6'>
                    <Outlet />
                    </div>
                    <div className='bg-gray-50'>
                    <Footer />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DashboardLayout;