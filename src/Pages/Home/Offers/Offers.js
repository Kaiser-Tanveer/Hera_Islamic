import React from 'react';
import bg from '../../../Assets/sectionBG.jpg';
import { FaArrowRightLong } from 'react-icons/fa6';
import AlQuran from '../../../Assets/hifz.png';

const Offers = () => {
    const offerAds = [
        {
            _id: "01",
            img: AlQuran,
            title: "Al-Quran Classes",
            detail: "There are many variations of students we are handling in our Madrasah. We have residential and non-residential facilities according to your want.",
        },
        {
            _id: "01",
            img: AlQuran,
            title: "Al-Quran Classes",
            detail: "There are many variations of students we are handling in our Madrasah. We have residential and non-residential facilities according to your want.",
        },
        {
            _id: "01",
            img: AlQuran,
            title: "Al-Quran Classes",
            detail: "There are many variations of students we are handling in our Madrasah. We have residential and non-residential facilities according to your want.",
        },
    ]
    return (
        <div
            style={{ background: `linear-gradient(to bottom, #121d18, #121212), url(${bg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100%" }}
            className='py-12 mt-12 h-full px-6 mx-auto'>
            <section className='text-[#ffffff]'>
                <h4 className='text-xl font-bold text-center uppercase text-primary'>What we offer</h4>
                <h1 className='mx-auto text-4xl font-bold text-center pt-6'>
                    We Offer An Effective <br className='hidden md:block' />
                    Arabic & Quran Services
                </h1>
                <div className='md:grid grid-cols-3 gap-6 mt-12'>
                    {
                        offerAds?.map(offerAd => <div
                            key={offerAd._id}
                            className="bg-white shadow-md mb-6 text-[#121212] rounded-md">
                            <div className='flex items-center justify-between px-2 pt-4 text-2xl font-bold'>
                                <h2>{offerAd?.title}</h2>
                                <img src={offerAd?.img} alt="" className='w-12' />
                            </div>
                            <p className='text-black opacity-[70%] text-justify px-2 py-4'>{offerAd?.detail}</p>
                            <button className='flex items-center justify-between bg-secondary p-2 font-semibold rounded-b-md hover:bg-primary duration-500 w-full'>
                                Read More <FaArrowRightLong className='ml-2' />
                            </button>
                        </div>
                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default Offers;