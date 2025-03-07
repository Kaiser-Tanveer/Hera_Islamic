import React from 'react';
import AddGrades from './AddGrades/AddGrades';
import GradeLists from './GradeLists/GradeLists';

const ExamGrades = () => {
    return (
        <div className='bg-gray-50 h-[96vh] overflow-auto'>
        <AddGrades/>
        <div className='mt-10'>
            <GradeLists/>
        </div>
    </div>
    );
};

export default ExamGrades;