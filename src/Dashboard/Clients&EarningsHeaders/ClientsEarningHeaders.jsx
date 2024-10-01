import React from 'react';
import { FaRegMoneyBill1, FaUsers } from 'react-icons/fa6';

const ClientsEarningHeaders = () => {
    return (
        <div className='flex items-center justify-between gap-4'>
            <div className='bg-white rounded-md border border-blue-200 shadow-md h-28 w-52 flex items-center justify-between p-4'>
                {/* <img src="" alt="" /> */}
                <FaUsers className='text-6xl p-2 text-blue-500 bg-blue-100 rounded-full'/>
                <p className='text-xl font-semibold'>
                    <span className='text-gray-600'>Students</span><br />
                    <span className=''>1000</span>
                </p>
            </div>
            <div className='bg-white rounded-md border border-green-200 shadow-md h-28 w-52 flex items-center justify-between p-4'>
                {/* <img src="" alt="" /> */}
                <FaUsers className='text-6xl p-2 text-green-500 bg-green-100 rounded-full'/>
                <p className='text-xl font-semibold'>
                    <span className='text-gray-600'>Teachers</span><br />
                    <span className=''>1000</span>
                </p>
            </div>
            <div className='bg-white rounded-md border border-yellow-200 shadow-md h-28 w-52 flex items-center justify-between p-4'>
                {/* <img src="" alt="" /> */}
                <FaUsers className='text-6xl p-2 text-blue-500 bg-blue-100 rounded-full'/>
                <p className='text-xl font-semibold'>
                    <span className='text-gray-600'>Parents</span><br />
                    <span className=''>1000</span>
                </p>
            </div>
            <div className='bg-white rounded-md border border-red-200 shadow-md h-28 w-52 flex items-center justify-between p-4'>
                {/* <img src="" alt="" /> */}
                <FaRegMoneyBill1 className='text-6xl p-2 text-red-500 bg-red-100 rounded-full'/>
                <p className='text-xl font-semibold'>
                    <span className='text-gray-600'>Earning</span><br />
                    <span className='text-red-500'>$1000</span>
                </p>
            </div>
        </div>
    );
};

export default ClientsEarningHeaders;