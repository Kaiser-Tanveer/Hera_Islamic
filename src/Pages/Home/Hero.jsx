import React from 'react';
import bg from '../../Assets/MainBG.jpg';
import PrimaryBtn from '../../Components/SharedComponents/ReusableBtn/PrimaryBtn';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <img
        src={bg}
        alt="Hero Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Welcome to <span className='text-blue-700 uppercase'>Hera Islamic Academy</span>
        </h1>
        <p className="text-white mt-4 text-lg md:text-xl text-center">
          Discover amazing content and connect with us.
        </p>
        <button className='mt-8'><PrimaryBtn title={'ADMISSION FORM'} btnLink={'/admissionForm'}/></button>
      </div>
    </div>
  );
};

export default Hero;
