import React from 'react';
import readingQuran from '../../../Assets/readingQuran.jpeg';
import prayer from '../../../Assets/Prayer.jpeg';

const Welcome = () => {
    return (
        <section className='px-6 md:flex items-center justify-between gap-4 mx-auto'>
            <article className='md:w-[50%] text-justify'>
                <h1 className='text-2xl font-bold text-left pb-4'>WELCOME TO <br className='md:hidden' /> <span className='text-primary'>HERA ISLAMIC ACADEMY</span></h1>
                <p className='text-black opacity-80'>
                    We welcome our users to Online Quran teaching services where we are offering multiple Islamic as well as character building and life reformation courses as per the teachings of Sharia.
                </p>
                <div className='flex items-start mt-4'>
                    <img src={readingQuran} alt="" className='h-auto w-1/5 rounded-l-md' />
                    <p className='ml-2 pl-4 border-l-4 border-primary text-black opacity-80'>
                        There are many variations of passages of lorem ipsum available, but the majority have suffered business consulting
                    </p>
                </div>
                <p className='text-black opacity-80'>
                    We offer our students high-quality Arabic and Quran at affordable prices that meet their budget.
                </p>
            </article>
            <div className='w-[40%] hidden md:block'>
                <img src={prayer} alt="" className='rounded-tr-md border-l-4 border-primary' />
                <p className='bg-primary py-4 px-6 text-xl font-semibold text-white rounded-br-md'>Started at 2024</p>
            </div>
        </section>
    );
};

export default Welcome;