import React from 'react';
import FeeChart from './FeeChart';
import ClassRoutine from './ClassRoutine';

const SecondRow = () => {
    return (
        <div className='w-full h-[270px] mt-4 flex items-center justify-between gap-6 overflow-hidden'>
            <FeeChart/>
            <ClassRoutine/>
        </div>
    );
};

export default SecondRow;