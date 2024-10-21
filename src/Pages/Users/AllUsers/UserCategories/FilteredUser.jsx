import React, { useEffect, useState } from 'react';
import FilteredUserData from './FilteredUserData';
import ReusableTable from '../../../../Components/SharedComponents/ReusableTable';


const FilteredUser = ({ filteredUsers, users }) => {
    const [allUsers, setAllUsers] = useState([]);
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
        fetch('/Users/Users.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setAllUsers(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const userTableHeader = ["SL", "Photo", "Name", "Gender", "User Type", "Address", "Phone", "Email", "Action"]

    const renderStudentRow = (user) => (
        <FilteredUserData key={user.roll} user={user} />
    );
    return (
        <div className='bg-white rounded-md p-4  h-[50vh] overflow-auto'>
            <ReusableTable
                headers={userTableHeader}
                data={allUsers}
                tableLoading={tableLoading}
                renderRow={renderStudentRow}
            />
        </div>
    );
};

export default FilteredUser;
