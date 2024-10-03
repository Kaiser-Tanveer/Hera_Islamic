import React from 'react';
import CreateNotice from './CreateNotice/CreateNotice';
import AllNotices from './AllNotices/AllNotices';

const Notice = () => {
    return (
        <div className='bg-gray-50 h-[96vh] overflow-auto'>
            <CreateNotice/>
            <div>
                <AllNotices/>
            </div>
        </div>
    );
};

export default Notice;