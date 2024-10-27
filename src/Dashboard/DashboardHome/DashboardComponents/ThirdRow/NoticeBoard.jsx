import React from 'react';
import AllNotices from '../../../../Pages/Notice/AllNotices/AllNotices';
import { Link } from 'react-router-dom';

const NoticeBoard = () => {
    return (
        <Link to='/dashboard/notice' className='w-[40%] pb-4 h-64 overflow-auto bg-white rounded-md border border-white hover:border-sky-200 shadow-md duration-500'>
            <AllNotices/>
        </Link>
    );
};

export default NoticeBoard;