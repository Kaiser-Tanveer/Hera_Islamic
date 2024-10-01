import React from 'react';
import AddRoutine from './AddRoutine';
import AllRoutines from './AllRoutines';

const ClassRoutine = () => {
    return (
        <div className='bg-gray-50 rounded-md h-[100vh] overflow-hidden'>
            <AddRoutine/>
            <div className='mt-12'>
                <AllRoutines/>
            </div>
        </div>
    );
};

export default ClassRoutine;