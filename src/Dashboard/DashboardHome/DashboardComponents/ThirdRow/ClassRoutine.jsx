import React from 'react';
import { Link } from 'react-router-dom';
import AllRoutines from '../../../../Pages/ClassRoutines/AllRoutines';

const ClassRoutine = () => {
    return (
        <Link to='/dashboard/classRoutines' className='w-[40%] pb-4 h-64 overflow-auto bg-white rounded-md border hover:border-sky-200 shadow-md duration-500'>
            <AllRoutines/>
        </Link>
    );
};

export default ClassRoutine;