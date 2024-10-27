import React from 'react';
import FeeChart from './FeeChart';
import ClassRoutine from './ClassRoutine';

const ThirdRow = () => {
    return (
        <div className='w-full h-64 mt-6 flex items-center justify-between gap-6 overflow-hidden'>
            <ClassRoutine/>
            <FeeChart/>
        </div>
    );
};

export default ThirdRow;