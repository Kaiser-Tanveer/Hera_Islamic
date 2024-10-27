import React, { useEffect, useState } from 'react';
import FilteredUserData from './FilteredUserData';
import ReusableTable from '../../../../Components/SharedComponents/ReusableTable';


const FilteredUser = ({ filteredUsers }) => {
    const userTableHeader = ["SL", "Photo", "Name", "Gender", "User Type", "Address", "Phone", "Email", "Action"]

    const renderStudentRow = (user) => (
        <FilteredUserData key={user.roll} user={user} />
    );
    return (
        <div className='bg-white rounded-md p-4  h-[50vh] overflow-auto'>
            <ReusableTable
                headers={userTableHeader}
                data={filteredUsers}
                renderRow={renderStudentRow}
            />
        </div>
    );
};

export default FilteredUser;
