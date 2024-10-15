import React from 'react';
import { Link } from 'react-router-dom';

const AllTeachersData = ({teacher}) => {
    return (
        <tr key={teacher?.ID} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
            <td className='pr-2 py-2 text-nowrap'>{teacher?.ID}</td>
            <td className='p-2 text-nowrap'>
            <Link to={`teachers/${teacher?.ID}`} className='cursor-pointer'>
            <img src={teacher?.TeacherImage} alt="" className='h-8 w-8 rounded-full' />
            </Link>
            </td>
            <td className='p-2 text-nowrap'>
            <Link to={`teachers/${teacher?.ID}`} className='cursor-pointer'>
                {teacher?.Name}
            </Link>
            </td>
            <td className='p-2 text-nowrap'>{teacher?.Gender}</td>
            <td className='p-2 text-nowrap'>{teacher?.Subject}</td>
            <td className='p-2 text-nowrap'>{teacher?.Class}</td>
            <td className='p-2 text-nowrap'>{teacher?.Section}</td>
            <td className='p-2 text-nowrap'>{teacher?.ParentName}</td>
            <td className='p-2 text-nowrap'>{teacher?.Address}</td>
            <td className='p-2 text-nowrap'>{teacher?.AdmissionDate}</td>
            <td className='p-2 text-nowrap'>{teacher?.Phone}</td>
            <td className='pl-2 py-2 text-nowrap'>{teacher?.Email}</td>
        </tr>
    );
};

export default AllTeachersData;