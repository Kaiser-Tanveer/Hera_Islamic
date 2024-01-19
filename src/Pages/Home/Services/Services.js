import React from 'react';
import quran from '../../../Assets/hifz.png';

const Services = () => {
    const services = [
        {
            id: "01",
            img: "",
            title: "Expert Quran Tutors",
            details: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars",
        },
        {
            id: "02",
            img: "",
            title: "Expert Academic Teachers",
            details: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars",
        },
        {
            id: "03",
            img: "",
            title: "Flexible Timing",
            details: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars",
        },
        {
            id: "04",
            img: "",
            title: "Responsible Care Taker",
            details: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars",
        },
    ]
    return (
        <div>
            <h4 className='text-xl font-bold text-center uppercase pt-12 pb-6 text-primary'>Our Services</h4>
            <div className='md:grid grid-cols-4 gap-10 mx-6'>
                {
                    services?.map(service =>
                        <div
                            key={service._id}
                            className="bg-secondary hover:bg-primary border border-[#121212] shadow-lg mb-6 text-[#121212] rounded-lg text-center duration-500">
                            <img src={quran} alt="" className='mx-auto mt-12 w-24 rounded-full p-3 bg-white' />
                            <article className='px-4 py-6'>
                                <h2 className='text-xl font-bold'>{service?.title}</h2>
                                <p className='text-black opacity-[60%] font-medium pt-4 text-justify'>{service?.details}</p>
                            </article>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;