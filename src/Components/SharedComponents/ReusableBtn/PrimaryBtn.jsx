import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryBtn = ({ title, btnLink }) => {
    return (
        <Link to={btnLink} className='h-12 w-32 bg-blue-700 text-white font-semibold rounded-tr-full rounded-bl-full border border-white hover:border-blue-700 hover:bg-white hover:text-blue-700 duration-500 py-3 px-6 shadow-md shadow-white hover:shadow-blue-700'>
            {title} 
        </Link>
    );
};

export default PrimaryBtn;
