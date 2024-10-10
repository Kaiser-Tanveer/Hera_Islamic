import React, { useEffect, useState } from 'react';

const AllNotices = () => {
    const [notices, setNotices] = useState([]);
    const [laoding, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/Notices/Notice.json')
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setNotices(data);
            setLoading(false);
        }).catch(err => {
            setError(err.messages);
            setLoading(false)
        })
    }, []);
    
    return (
        <div className='bg-white p-6 rounded-md rounded-e-md mt-10'>
            <h2 className='pb-6 text-xl font-bold'>Notice Board</h2>
            {
                notices?.map((notice, index) => (
                    <article key={index + 1}>
                        <div className='flex items-center justify-between'>
                            <button className={`px-4 py-2 rounded-3xl text-white ${index % 2 === 0 ? 'bg-purple-500' : 'bg-sky-500'} p-4`}>{notice?.Date}</button>
                            <span className='italic opacity-50'>5 mins ago</span>
                        </div>
                        <p className='font-semibold text-justify py-2'>{notice?.Description}</p>
                        <p className='text-sm opacity-50'>- {notice?.Author}</p>
                        <hr className='my-4' />
                    </article>
                ))
            }
        </div>
    );
};

export default AllNotices;
