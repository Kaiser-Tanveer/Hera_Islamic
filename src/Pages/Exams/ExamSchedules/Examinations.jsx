import React from 'react';
import AddExamSchedule from './AddExamSchedule/AddExamSchedule';
import AllExamSchedules from './AllExamSchedules/AllExamSchedules';

const Examinations = () => {
    return (
        <div className='bg-gray-50'>
            <AddExamSchedule/>
            <div className='mt-10'>
                <AllExamSchedules/>
            </div>
        </div>
    );
};

export default Examinations;