import React from 'react';
import AddSubjects from './AddSubjects';
import AllSubjects from './AllSubjects';

const Subjects = () => {
    return (
        <div className='bg-gray-50 rounded-md h-[100vh] overflow-auto'>
            <AddSubjects/>
            <div className='mt-12'>
                <AllSubjects/>
            </div>
        </div>
    );
};

export default Subjects;