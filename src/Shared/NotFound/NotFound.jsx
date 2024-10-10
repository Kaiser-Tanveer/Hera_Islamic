import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-white py-[35vh]'>
            <h1 className='text-6xl text-center text-red-500 font-bold'>404</h1>
            <p className='text-xl text-center'>Page Not Found</p>
            <div className='flex items-center justify-center mt-4'>
            <Link to="/dashboard" className='py-2 px-4 border border-sky-500 text-sky-500 rounded-md hover:scale-105 duration-500'>Back to home</Link>
            </div>
        </div>
    );
};

export default NotFound;