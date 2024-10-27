import React from 'react';
import NoticeBoard from './NoticeBoard';
import AttendanceChart from './AttendanceChart';

const ThirdRow = () => {
    return (
        <div className='w-full h-[270px] mt-[12px] flex items-center justify-between gap-6 overflow-hidden'>
            <NoticeBoard/>
            <AttendanceChart/>
        </div>
    );
};

export default ThirdRow;