import React from 'react';

const AllSubjects = () => {
    const rows = [];
    for (let i = 1; i < 11; i++) {
        rows.push(i);
    }

    return (
        <div className='bg-white rounded-md p-4'>
            <h3 className='py-4 font-bold text-xl'>All Subjects</h3>
            <div className='overflow-auto h-[20vh]'>
                <table className="border border-gray-200 w-full">
                    <thead>
                        <tr>
                            <th className='pr-2 py-2 text-nowrap'>ID</th>
                            <th className='p-2 text-nowrap'>Subject Name</th>
                            <th className='p-2 text-nowrap'>Subject Type</th>
                            <th className='p-2 text-nowrap'>Class</th>
                            <th className='p-2 text-nowrap'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map(row => (
                                <tr key={row} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                                    <td className='text-center pr-2 py-2 text-nowrap'>{row}</td>
                                    <td className='text-center p-2 text-nowrap'>English for Today</td>
                                    <td className='text-center p-2 text-nowrap'>English</td>
                                    <td className='text-center p-2 text-nowrap'>04</td>
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

export default AllSubjects;
