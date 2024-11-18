import React, { useEffect, useState } from 'react';
import AddUser from './AddUser/AddUser';
import AllUsers from './AllUsers/AllUsers';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tableLoading, setTableLoading] = useState(true);

    //---------------------- Table Loader ---------------------//
    useEffect(() => {
        const timer = setTimeout(() => {
            setTableLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Fetching Student Data 
    useEffect(() => {
        fetch('http://localhost:3003/api/users')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    return (
        <div className='bg-gray-50 h-[96vh] overflow-auto'>
            <AddUser/>
            <div className='mt-10'>
                <AllUsers
                    users={users}
                    setUsers={setUsers}
                />
            </div>
        </div>
    );
};

export default Users;