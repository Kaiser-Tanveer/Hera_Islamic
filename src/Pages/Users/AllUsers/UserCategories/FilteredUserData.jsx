import React from 'react';
import { HiUserRemove } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const FilteredUserData = ({user}) => {
    const onRemove = (id) => {
        console.log(id);
    }
    return (
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
            <td className='p-2 text-nowrap'>{user.Phone}</td>
            <td className='pl-2 py-2 text-nowrap'>{user.Email}</td>
            <td className='pl-2 py-2 text-nowrap'>
            <button 
            onClick={()=> onRemove(user?.id)} 
                className="text-red-500 hover:text-white p-2 rounded hover:bg-red-700 transition duration-300"
                >
                    <HiUserRemove />
                </button>
            </td>
        </tr>
    );
};

export default FilteredUserData;