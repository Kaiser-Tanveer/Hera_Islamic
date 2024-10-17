import React from 'react';

const AllSubjectData = ({subject}) => {
    return (
        <tr key={subject.SL} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
            <td className='text-left pr-2 py-2 text-nowrap'>{subject?.SL}</td>
            <td className='text-left pr-2 py-2 text-nowrap'>{subject?.SubjectName}</td>
            <td className='text-left p-2 text-nowrap'>{subject?.SubjectCode}</td>
            <td className='text-left p-2 text-nowrap'>{subject?.SubjectType}</td>
            <td className='text-left p-2 text-nowrap'>{subject?.Class}</td>
            <td className='text-left p-2 text-nowrap'>{subject?.Date}</td>
        </tr>
    );
};

export default AllSubjectData;