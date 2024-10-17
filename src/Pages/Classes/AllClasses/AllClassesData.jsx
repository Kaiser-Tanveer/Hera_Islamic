import React from 'react';
import { Link } from 'react-router-dom';

const AllClassesData = ({singleClass}) => {
    return (
        <tr className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
            <td className='px-2 py-2 text-nowrap'>{singleClass?.ID}</td>
            <td className='p-2 text-nowrap'>
            <Link to="/stu" className='flex items-center gap-2'>
            <img src={singleClass?.Photo} alt="" className='h-8 w-8 rounded-full' />
            </Link>
            </td>
            <td className='p-2 text-nowrap'>
            <Link to="/teacher" className='flex items-center gap-2'>{singleClass?.Teacher}</Link>
            </td>
            <td className='p-2 text-nowrap'>{singleClass?.Gender}</td>
            <td className='p-2 text-nowrap'>{singleClass?.Subject}</td>
            <td className='p-2 text-nowrap'>{singleClass?.Class}</td>
            <td className='p-2 text-nowrap'>{singleClass?.Section}</td>
            <td className='p-2 text-nowrap'>{singleClass?.Date}</td>
            <td className='p-2 text-nowrap'>{singleClass?.Time}</td>
            <td className='p-2 text-nowrap'>{singleClass?.Phone}</td>
            <td className='pl-2 py-2 text-nowrap'>{singleClass?.Email}</td>
        </tr>
    );
};

export default AllClassesData;