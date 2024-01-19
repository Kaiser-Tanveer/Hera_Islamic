import React from 'react';
import banner from '../../../Assets/heraBanner.jpg';
import { FaArrowRightLong } from 'react-icons/fa6';
import ClassCertificate from '../Class&Certifications/AboutClass&Certificate';


const Banner = () => {
    return (
        <div className='relative pb-14 md:pb-40'>
            <img src={banner} alt="" className='h-56 md:h-96 w-[100vw] z-30' />
            <h1 className='absolute left-[35%] md:left-[40%] top-[2%] md:top-[10%] text-2xl md:text-5xl font-bold text-primary pt-0 mt-0'>HERA ISLAMIC ACADEMY</h1>
            <p className='absolute text-justify md:text-center left-[35%] md:left-[40%] top-[12%] md:top-[25%] mr-5 text-[#e5fdfc]'>A Unique Institute in Combination with Deeni and General Education</p>
            <ClassCertificate />
            <div className='absolute top-[29%] md:top-[40%] right-[6%] md:left-[40%]'>
                <button className='flex items-center bg-primary text-white px-3 py-2 rounded-md border border-white hover:text-primary hover:bg-white hover:border-primary duration-500 ease-linear shadow-md'>
                    <span className='text-xl font-semibold'>Continue</span>
                    <FaArrowRightLong className='ml-2' />
                </button>
            </div>
        </div>
    );
};

export default Banner;