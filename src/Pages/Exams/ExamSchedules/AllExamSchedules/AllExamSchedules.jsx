import React from 'react';

const AllExamSchedules = () => {
    const rows = [];
    for (let i = 1; i < 11; i++) {
        rows.push(i);
    }

    return (
        <div className='bg-white rounded-md p-4'>
            <h3 className='py-4 font-bold text-xl'>All Exams Schedule</h3>
            <div className='overflow-auto h-[20vh]'>
                <table className="border border-gray-200 w-full">
                    <thead>
                        <tr>
                            <th className='pr-2 py-2 text-nowrap'>Exam Name</th>
                            <th className='p-2 text-nowrap'>Subject</th>
                            <th className='pr-2 py-2 text-nowrap'>Class</th>
                            <th className='p-2 text-nowrap'>Section</th>
                            <th className='p-2 text-nowrap'>Time</th>
                            <th className='p-2 text-nowrap'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map(row => (
                                <tr key={row} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                                    <td className='text-center p-2 text-nowrap'>English for Today</td>
                                    <td className='text-center pr-2 py-2 text-nowrap'>English</td>
                                    <td className='text-center p-2 text-nowrap'>04</td>
                                    <td className='text-center p-2 text-nowrap'>A</td>
                                    <td className='text-center p-2 text-nowrap'>11.00 - 12.00</td>
                                    <td className='text-center p-2 text-nowrap'>19/09/2024</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllExamSchedules;