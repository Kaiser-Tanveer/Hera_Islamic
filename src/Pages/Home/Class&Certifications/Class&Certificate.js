import React from 'react';
import academic from '../../../Assets/academic.png';
import hifz from '../../../Assets/hifz.png';
import certificate from '../../../Assets/certificate.png';

const ClassCertificate = () => {
    return (
        <div className='md:absolute mt-10 md:mt-0 top-[65%] left-[5%] bg-white w-[90%] px-5 md:px-0 mx-auto text-[#121212] text-2xl font-bold z-50 md:h-32 md:flex gap-4 rounded-md border items-center justify-evenly border-[#b57a2c]'>
            <div className='md:w-[30%] my-4 md:my-0 flex items-center md:justify-center group'>
                <img src={hifz} alt="" className='w-16 p-2 border-2 border-[#b57a2c] rounded-full mr-2 group-hover:scale-110 ease-in-out duration-500' />
                <h2>Quran Classes (Hifz)</h2>
            </div>
            <div className='md:w-[30%] mb-4 md:mb-0 flex items-center md:justify-center group'>
                <img src={certificate} alt="" className='w-16 p-2 border-2 border-[#b57a2c] rounded-full mr-2 group-hover:scale-110 ease-in-out duration-500' />
                <h2>Certificates</h2>
            </div>
            <div className='md:w-[30%] mb-4 md:mb-0 flex items-center md:justify-center group'>
                <img src={academic} alt="" className='w-16 p-2 border-2 border-[#b57a2c] rounded-full mr-2 group-hover:scale-110 ease-in-out duration-500' />
                <h2>Academic Classes</h2>
            </div>
        </div>
    );
};

export default ClassCertificate;