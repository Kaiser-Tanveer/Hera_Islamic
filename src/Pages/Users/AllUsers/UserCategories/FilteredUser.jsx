import React from 'react';
import { Link } from 'react-router-dom';

const FilteredUser = ({ filteredUsers, users }) => {
    return (
        <div className='overflow-auto'>
            <table className="border border-gray-200 overflow-auto border-l-0 p-2">
                <thead>
                    <tr>
                        <th className='pr-2 py-2 text-nowrap'>S. No</th>
                        <th className='p-2 text-nowrap'>Photo</th>
                        <th className='p-2 text-nowrap'>Name</th>
                        <th className='p-2 text-nowrap'>Gender</th>
                        <th className='p-2 text-nowrap'>User Type</th>
                        <th className='p-2 text-nowrap'>Address</th>
                        <th className='p-2 text-nowrap'>Date of Birth</th>
                        <th className='p-2 text-nowrap'>Phone</th>
                        <th className='pl-2 py-2 text-nowrap'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {(filteredUsers?.length > 0 ? filteredUsers : users).map(user => (
                        <tr key={user.id} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                            <td className='pr-2 py-2 text-nowrap'>{user.id}</td>
                            <td className='p-2 text-nowrap'>
                                <Link to={`/singleUser/${user.id}`} className='flex items-center gap-2'>
                                    <img src={user.Photo} alt="" className='h-8 w-8 rounded-full' />
                                </Link>
                            </td>
                            <td className='p-2 text-nowrap'>
                                <Link to={`/singleUser/${user.id}`} className='flex items-center gap-2'>{user.Name}</Link>
                            </td>
                            <td className='p-2 text-nowrap'>{user.Gender}</td>
                            <td className='p-2 text-nowrap font-bold uppercase text-sky-500'>{user.UserType}</td>
                            <td className='p-2 text-nowrap'>{user.Address}</td>
                            <td className='p-2 text-nowrap'>{user.DateOfBirth}</td>
                            <td className='p-2 text-nowrap'>{user.Phone}</td>
                            <td className='pl-2 py-2 text-nowrap'>{user.Email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FilteredUser;
