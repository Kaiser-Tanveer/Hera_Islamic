import React from 'react';
import AddExamSchedule from './AddExamSchedule/AddExamSchedule';
import AllExamSchedules from './AllExamSchedules/AllExamSchedules';

const Examinations = () => {
    return (
        <div className='bg-gray-50 h-[96vh] overflow-auto'>
            <AddExamSchedule/>
            <div className='mt-10'>
                <AllExamSchedules/>
            </div>
        </div>
    );
};

export default Examinations;