import React from 'react';
import banner from '../../../Assets/heraBanner.jpg';
import { FaArrowRightLong } from 'react-icons/fa6';
import ClassCertificate from '../Class&Certifications/Class&Certificate';


const Banner = () => {
    return (
        <div className='relative pb-14 md:pb-40'>
            <img src={banner} alt="" className='h-56 md:h-96 w-[100vw] z-30' />
            <h1 className='absolute left-[30%] md:left-[40%] top-[3%] md:top-[10%] text-xl md:text-5xl font-bold text-[#b57a2c] pt-0 mt-0'>HERA ISLAMIC ACADEMY</h1>
            <p className='absolute text-left md:text-center left-[30%] md:left-[40%] top-[10%] md:top-[25%] text-[#e5fdfc] pt-0 mt-0'>A Unique Institute in Combination with Deeni and General Education</p>
            <ClassCertificate />
            <div className='absolute top-[25%] md:top-[40%] right-[6%] md:left-[40%]'>
                <button className='flex items-center bg-[#b57a2c] text-white px-3 py-2 rounded-md border border-white hover:text-[#b57a2c] hover:bg-white hover:border-[#b57a2c] duration-500 ease-linear shadow-md'>
                    <span className='text-xl font-semibold'>Continue</span>
                    <FaArrowRightLong className='ml-2' />
                </button>
            </div>
        </div>
    );
};

export default Banner;