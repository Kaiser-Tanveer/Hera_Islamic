import React from 'react';
import { Link } from 'react-router-dom';

const AllBooks = () => {
    return (
        <div className='bg-white rounded-md p-4'>
            <h3 className='py-4 font-bold text-xl'>All Teachers Data</h3>
            <div className='overflow-auto'>
            <table className="border border-gray-200  overflow-auto border-l-0 p-2 w-[100%]">
                <thead className=''>
                    <tr className=''>
                        <th className='pr-2 py-2 text-nowrap'>ID</th>
                        <th className='p-2 text-nowrap'>Book Name</th>
                        <th className='p-2 text-nowrap'>Subject</th>
                        <th className='p-2 text-nowrap'>Writer</th>
                        <th className='p-2 text-nowrap'>Class</th>
                        <th className='p-2 text-nowrap'>Published</th>
                        <th className='p-2 text-nowrap'>Creating Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                        <td className='pr-2 py-2 text-nowrap'>01</td>
                        <td className='p-2 text-nowrap'>English Grammar</td>
                        <td className='p-2 text-nowrap'>English</td>
                        <td className='p-2 text-nowrap'>Allama Taqi Osmani</td>
                        <td className='p-2 text-nowrap'>04</td>
                        <td className='p-2 text-nowrap'>2021</td>
                        <td className='p-2 text-nowrap'>12.01.2024</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllBooks;