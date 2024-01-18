import React from 'react';
import readingQuran from '../../../Assets/readingQuran.jpeg';
import prayer from '../../../Assets/Prayer.jpeg';

const Welcome = () => {
    return (
        <section className='w-[95%] flex items-center justify-between gap-4 mx-auto'>
            <article className='w-[50%]'>
                <h1 className='text-2xl font-bold'>WELCOME TO HERA ISLAMIC ACADEMY</h1>
                <p>
                    We welcome our users to Online Quran teaching services where we are offering multiple Islamic as well as character building and life reformation courses as per the teachings of Sharia.
                </p>
                <div className='flex items-center'>
                    <img src={readingQuran} alt="" className='h-auto w-1/5 rounded-l-md mt-4' />
                    <p className='ml-2 pl-4 border-l-4 border-[#b57a2c]'>
                        There are many variations of passages of lorem ipsum available, but the majority have suffered business consulting
                    </p>
                </div>
                <p>
                    We offer our students high-quality Arabic and Quran at affordable prices that meet their budget.
                </p>
            </article>
            <div className='w-[40%]'>
                <img src={prayer} alt="" className='rounded-tr-md border-l-4 border-[#b57a2c]' />
                <p className='bg-[#b57a2c] py-4 px-6 text-xl font-semibold text-white rounded-br-md'>Started at 2024</p>
            </div>
        </section>
    );
};

export default Welcome;