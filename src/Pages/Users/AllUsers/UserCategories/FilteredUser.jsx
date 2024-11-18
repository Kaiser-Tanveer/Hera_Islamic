import React from 'react';
import FilteredUserData from './FilteredUserData';
import ReusableTable from '../../../../Components/SharedComponents/ReusableTable';
import NoData from '../../../../Components/SharedComponents/NoData/NoData';
import { FaUsersSlash } from 'react-icons/fa6';

const FilteredUser = ({ filteredUsers, setUsers, status }) => {
    const userTableHeader = ["SL", "Photo", "Name", "Gender", "User Type", "Address", "Phone", "Email", "Action"];

    const renderStudentRow = (user, index) => (
        <FilteredUserData key={user.id || index} user={user} setUsers={setUsers} />
    );

    return (
        <div className='bg-white rounded-md p-4 h-[50vh] overflow-auto'>
            {filteredUsers.length > 0 ? (
                <ReusableTable
                    headers={userTableHeader}
                    data={filteredUsers}
                    renderRow={renderStudentRow}
                />
            ) : (
                <NoData 
                message={`No ${status} Available`}
                icon={<FaUsersSlash />}
                 />
            )}
        </div>
    );
};

export default FilteredUser;
