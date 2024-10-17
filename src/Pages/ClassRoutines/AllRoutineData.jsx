import React from 'react';

const AllRoutineData = ({routine}) => {
    return (
        <tr key={routine?.ID} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
            <td className='text-left pr-2 py-2 text-nowrap'>{routine?.Day}</td>
            <td className='text-left p-2 text-nowrap'>{routine?.Class}</td>
            <td className='text-left p-2 text-nowrap'>{routine?.Subject}</td>
            <td className='text-left p-2 text-nowrap'>{routine?.Section}</td>
            <td className='text-left p-2 text-nowrap'>{routine?.Teacher}</td>
            <td className='text-left p-2 text-nowrap'>{routine?.Time}</td>
            <td className='text-left p-2 text-nowrap'>{routine?.Date}</td>
        </tr>
    );
};

export default AllRoutineData;