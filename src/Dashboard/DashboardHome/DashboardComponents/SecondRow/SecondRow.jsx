import React from 'react';
import AttendanceChart from './AttendanceChart';
import NoticeBoard from './NoticeBoard';

const SecondRow = () => {
    return (
        <div className='w-full h-64 mt-6 flex items-center justify-between gap-6 overflow-hidden'>
            <AttendanceChart/>
            <NoticeBoard/>
        </div>
    );
};

export default SecondRow;