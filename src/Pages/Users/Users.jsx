import React from 'react';
import AddUser from './AddUser/AddUser';
import AllUsers from './AllUsers/AllUsers';

const Users = () => {
    return (
        <div className='bg-gray-50 h-[96vh] overflow-auto'>
            <AddUser/>
            <div className='mt-10'>
                <AllUsers/>
            </div>
        </div>
    );
};

export default Users;