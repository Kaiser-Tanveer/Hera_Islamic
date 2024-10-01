import React from 'react';

const GradeLists = () => {
    const rows = [];
    for (let i = 1; i < 11; i++) {
        rows.push(i);
    }

    return (
        <div className='bg-white rounded-md p-4'>
            <h3 className='py-4 font-bold text-xl'>Exam Grade Lists</h3>
            <div className='overflow-auto h-[20vh]'>
                <table className="border border-gray-200 w-full">
                    <thead>
                        <tr>
                            <th className='pr-2 py-2 text-nowrap'>Grade</th>
                            <th className='p-2 text-nowrap'>Point</th>
                            <th className='pr-2 py-2 text-nowrap'>Percentage From</th>
                            <th className='p-2 text-nowrap'>Percentage To</th>
                            <th className='p-2 text-nowrap'>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map(row => (
                                <tr key={row} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                                    <td className='text-center p-2 text-nowrap'>A+</td>
                                    <td className='text-center pr-2 py-2 text-nowrap'>4.80</td>
                                    <td className='text-center p-2 text-nowrap'>80</td>
                                    <td className='text-center p-2 text-nowrap'>100</td>
                                    <td className='text-center p-2 text-nowrap'>Good Result</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GradeLists;