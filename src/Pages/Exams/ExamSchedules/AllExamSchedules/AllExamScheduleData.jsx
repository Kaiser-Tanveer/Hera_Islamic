import React from 'react';

const AllExamScheduleData = ({exam}) => {
    return (
        <tr key={exam?.ID} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
            <td className='text-left p-2 text-nowrap'>{exam?.ExamName}</td>
            <td className='text-left pr-2 py-2 text-nowrap'>{exam?.Subject}</td>
            <td className='text-left p-2 text-nowrap'>{exam?.Class}</td>
            <td className='text-left p-2 text-nowrap'>{exam?.Section}</td>
            <td className='text-left p-2 text-nowrap'>{exam?.StartTime} - {exam?.EndTime}</td>
            <td className='text-left p-2 text-nowrap'>{exam?.Date}</td>
        </tr>
    );
};

export default AllExamScheduleData;