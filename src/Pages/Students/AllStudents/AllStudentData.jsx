import React from 'react';
import { Link } from 'react-router-dom';

const AllStudentData = ({student}) => {
    return (
        <tr key={student?.roll} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
            <td className='pr-2 py-2 text-nowrap'>{student?.roll}</td>
            <td className='p-2 text-nowrap'>
                <Link to="/stu" className='flex items-center gap-2'>
                    <img src={student?.img} alt="" className='h-8 w-8 rounded-full' loading='lazy' />
                </Link>
            </td>
            <td className='p-2 text-nowrap'>
                <Link to="/stu" className='flex items-center gap-2'>
                    {student?.fName + ' ' + student.lName}
                </Link>
            </td>
            <td className='p-2 text-nowrap'>{student?.gender}</td>
            <td className='p-2 text-nowrap'>{student?.class}</td>
            <td className='p-2 text-nowrap'>{student?.section}</td>
            <td className='p-2 text-nowrap'>{student?.parent}</td>
            <td className='p-2 text-nowrap'>{student?.address}</td>
            <td className='p-2 text-nowrap'>{student?.DOB}</td>
            <td className='p-2 text-nowrap'>{student?.phone}</td>
        </tr>
    );
};

export default AllStudentData;