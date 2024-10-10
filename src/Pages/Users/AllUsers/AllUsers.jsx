import React, { useEffect, useState } from 'react';
import FilteredUser from './UserCategories/FilteredUser';

const AllUsers = ({users}) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);


    const userBtnHandler = (data) => {
        setStatus(data?.UserType);
        setDescription(data?.Description);
    }

    useEffect(() => {
        const matchedUsers = users.filter(user => user.UserType === status);
        setFilteredUsers(matchedUsers);
    }, [status, users]);
    
    

    useEffect(() => {
        fetch('/Users/UserCategories.json')
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setCategories(data?.UserCategories);
            setLoading(false);
        })
        .catch(err => {
            setError(err.messages);
            setLoading(false);
        })
    }, []);

    return (
        <div className='bg-white p-6 rounded-md'>
            <div className='flex items-start gap-8'>
                <aside className='w-[30%]'>
                <h2 className='text-xl text-center font-bold'>User Categories</h2>
                <p className='opacity-50 text-center pb-6'>Click to see the categories</p>
                    {
                        categories.map(category =>
                            <button key={category?.id} onClick={() =>userBtnHandler(category)} className='w-full py-2 mb-2 rounded-md border border-sky-100 bg-sky-500 text-xl text-white uppercase'>
                                {category.UserType}
                            </button>
                        )
                    }
                </aside>
                <div className='w-[65%]'>
                    <h2 className='text-xl text-center font-bold'>{status}</h2>
                    <p className='opacity-50 text-center pb-6'>{description}</p>
                    <FilteredUser 
                        filteredUsers={filteredUsers}
                        users={users}
                    />
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
