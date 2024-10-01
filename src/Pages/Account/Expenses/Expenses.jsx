import React from 'react';
import { Link } from 'react-router-dom';

const Expenses = () => {
    return (
        <div className='bg-white rounded-md p-4'>
            <h3 className='py-4 font-bold text-xl'>All Expenses</h3>
            <div className='overflow-auto'>
            <table className="border border-gray-200  overflow-auto border-l-0 p-2 w-[100%]">
                <thead className=''>
                    <tr className=''>
                        <th className='pr-2 py-2 text-nowrap'>ID</th>
                        <th className='p-2 text-nowrap'>Name</th>
                        <th className='p-2 text-nowrap'>Expense Type</th>
                        <th className='p-2 text-nowrap'>Amount</th>
                        <th className='p-2 text-nowrap'>Status</th>
                        <th className='p-2 text-nowrap'>Phone</th>
                        <th className='pl-2 p-2 text-nowrap'>Email</th>
                        <th className='pl-2 p-2 text-nowrap'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                        <td className='pr-2 py-2 text-nowrap'>01</td>
                        <td className='p-2 text-nowrap'>
                        <Link className='flex items-center gap-2'>
                            Mrs. Y
                        </Link>
                        </td>
                        <td className='p-2 text-nowrap'>Salary</td>
                        <td className='p-2 text-nowrap'>50000</td>
                        <td className='p-2 text-nowrap'><span onClick={""} className='bg-red-500 rounded-3xl py-2 px-4 text-white cursor-pointer'>Unpaid</span></td>
                        <td className='p-2 text-nowrap'>018XXXXXXXXX</td>
                        <td className='p-2 text-nowrap'>kaisertanveer0@gmail.com</td>
                        <td className='p-2 text-nowrap'>19/09/2024</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Expenses;