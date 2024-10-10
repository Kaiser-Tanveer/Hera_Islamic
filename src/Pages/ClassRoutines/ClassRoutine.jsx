import React from 'react';
import AddRoutine from './AddRoutine';
import AllRoutines from './AllRoutines';

const ClassRoutine = () => {
    return (
        <div className='bg-gray-50 rounded-md h-[95vh] overflow-auto'>
            <AddRoutine/>
            <div className='mt-10'>
                <AllRoutines/>
            </div>
        </div>
    );
};

export default ClassRoutine;