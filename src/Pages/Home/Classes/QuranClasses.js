import React from 'react';
import banner from '../../../Assets/hifzStudents.jpeg';
import quran from '../../../Assets/hifz.png';

const QuranClasses = () => {
    const classDetails = [
        {
            name: "Nurani Quayeeda",
            lessons: "10",
            duration: "15 weeks",
            students: "30",
            details: "There are many variations of Quran class available online"
        },
        {
            name: "Aam Para",
            lessons: "10",
            duration: "15 weeks",
            students: "30",
            details: "There are many variations of Quran class available online"
        },
        {
            name: "Najera",
            lessons: "10",
            duration: "15 weeks",
            students: "30",
            details: "There are many variations of Quran class available online"
        },
        {
            name: "Hifz",
            lessons: "10",
            duration: "15 weeks",
            students: "30",
            details: "There are many variations of Quran class available online"
        },
    ]
    return (
        <>
            <h4 className='text-xl font-bold text-center uppercase text-primary'>Our Courses</h4>
            <h1 className='mx-auto text-4xl font-bold text-center pt-6 pb-4'>
                Al-Quran Classes
            </h1>
            <div className='md:grid grid-cols-4 gap-6 mx-6'>
                {
                    classDetails?.map(classDetail =>
                        <div
                            key={classDetail._id}
                            className="bg-white shadow-md mb-6 text-[#121212] rounded-md">
                            <div className='relative rounded-t-md'>
                                <img src={banner} alt="" className='h-[180px] w-full rounded-t-md' />
                                <img src={quran} alt="" className='w-16 absolute -bottom-6 left-[22%] rounded-full p-3 bg-white' />
                            </div>
                            <article className='px-4 py-6'>
                                <h2 className='text-xl font-bold'>{classDetail?.name}</h2>
                                <div className='flex items-center justify-between font-semibold pt-4 leading-5 text-center'>
                                    <p><span className='text-primary'>{classDetail?.lessons}</span> <br /> lessons</p>
                                    <p><span className='text-primary'>{classDetail?.duration}</span>  <br />duration</p>
                                    <p><span className='text-primary'>{classDetail?.students}</span>  <br />students</p>
                                </div>
                                <p className='text-black opacity-[70%] pt-4'>{classDetail?.details}</p>
                            </article>
                            <div className='flex items-center justify-between gap-4 px-4 pb-4'>
                                <button className='text-normal w-full p-2 font-semibold bg-primary text-white rounded-md'>Enroll Now</button>
                                <button className='text-normal w-full p-2 font-semibold bg-secondary text-primary rounded-md'>BDT 5000</button>
                                {/* ৳ */}
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default QuranClasses;