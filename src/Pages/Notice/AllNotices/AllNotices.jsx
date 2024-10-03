import React from 'react';

const AllNotices = () => {
    const notices = [];
    for (let i = 1; i < 11; i++) {
        notices.push(i);
    }
    
    return (
        <div className='bg-white p-6 rounded-md rounded-e-md mt-10'>
            <h2 className='pb-6 text-xl font-bold'>Notice Board</h2>
            {
                notices.map((notice, index) => (
                    <article key={index}>
                        <div className='flex items-center justify-between'>
                            <button className={`px-4 py-2 rounded-3xl text-white ${index % 2 === 0 ? 'bg-purple-500' : 'bg-blue-500'} p-4`}>{`21/09/2024`}</button>
                            <span className='italic opacity-50'>5 mins ago</span>
                        </div>
                        <p className='font-semibold text-justify py-2'>
                            Great School Great School manag mene esom text of the printing Great School manag mene esom text of the printing manag mene esom text of the printing.
                        </p>
                        <p className='text-sm opacity-50'>- Mr. X</p>
                        <hr className='my-4' />
                    </article>
                ))
            }
        </div>
    );
};

export default AllNotices;
