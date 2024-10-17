import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseData = ({expense}) => {
    const expenseStatusHandler = () => {
        console.log(expenseStatusHandler);
    }
    return (
        <tr className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
            <td className='px-2 py-2 text-nowrap'>{expense?.ID}</td>
            <td className='p-2 text-nowrap'>
            <Link className='flex items-center gap-2'>{expense?.Name}</Link>
</td>
            <td className='p-2 text-nowrap'>{expense?.ExpenseType}</td>
            <td className='p-2 text-nowrap'>{expense?.Amount}</td>
            <td className='p-2 text-nowrap'><span onClick={() => expenseStatusHandler(expense?.Status)} className={expense?.Status === "Paid" ? "bg-green-500 rounded-3xl py-1 px-4 text-white cursor-pointer shadow-md hover:scale-105 duration-500" : expense?.Status === "Overdue" ? "bg-red-300 text-red-600 rounded-3xl py-1 px-4 cursor-pointer shadow-md hover:scale-105 duration-500" : "bg-red-500 rounded-3xl py-1 px-4 text-white cursor-pointer shadow-md hover:scale-105 duration-500"}>{expense?.Status}</span></td>
            <td className='p-2 text-nowrap'>{expense?.Phone}</td>
            <td className='p-2 text-nowrap'>{expense?.Email}</td>
            <td className='p-2 text-nowrap'>{expense?.Date}</td>
        </tr>
    );
};

export default ExpenseData;