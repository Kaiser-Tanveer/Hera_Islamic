import React, { useEffect, useState } from 'react';
import AddUser from './AddUser/AddUser';
import AllUsers from './AllUsers/AllUsers';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [laoding, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/Users/Users.json')
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setUsers(data);
            setLoading(false);
        }).catch(err => {
            setError(err.messages);
            setLoading(false);
        })
    }, []);
    return (
        <div className='bg-gray-50 h-[96vh] overflow-auto'>
            <AddUser/>
            <div className='mt-10'>
                <AllUsers
                    users={users}
                />
            </div>
        </div>
    );
};

export default Users;