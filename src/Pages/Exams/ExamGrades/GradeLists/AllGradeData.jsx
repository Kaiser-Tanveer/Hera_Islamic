import React from 'react';

const AllGradeData = ({grade}) => {
    return (
        <tr key={grade?.id} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
            <td className='text-left p-2 text-nowrap'>{grade?.StudentName}</td>
            <td className='text-left p-2 text-nowrap'>{grade?.Class}</td>
            <td className='text-left p-2 text-nowrap'>{grade?.Grade}</td>
            <td className='text-left pr-2 py-2 text-nowrap'>{grade?.Point}</td>
            <td className='text-left p-2 text-nowrap'>{grade?.PercentageFrom}</td>
            <td className='text-left p-2 text-nowrap'>{grade?.PercentageTo}</td>
            <td className='text-left p-2 text-nowrap'>{grade?.Comments}</td>
        </tr>
    );
};

export default AllGradeData;
