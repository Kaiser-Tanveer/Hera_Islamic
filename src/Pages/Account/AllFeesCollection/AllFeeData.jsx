import React from 'react';
import { Link } from 'react-router-dom';

const AllFeeData = ({feeCollection}) => {
    const feeStatusHandler = (status) => {
        console.log(status);
    }
    return (
            <tr className={feeCollection?.Status === "Overdue" ? 'border-y border-gray-200 bg-red-100 hover:animate-none duration-500 animate-pulse' : feeCollection?.Status === "Paid" ? 'border-y border-gray-200 bg-green-50': 'border-y border-gray-200 bg-gray-50 hover:bg-gray-100'}>
                <td className='px-2 py-2 text-nowrap'>{feeCollection?.ID}</td>
                <td className='p-2 text-nowrap'>
                <Link className='flex items-center gap-2'>
                <img src={feeCollection?.Photo} alt="" className='h-8 w-8 rounded-full' />
                </Link>
                </td>
                <td className='p-2 text-nowrap'>
                <Link className='flex items-center gap-2'>
                    {feeCollection?.Name}
                </Link>
                </td>
                <td className='p-2 text-nowrap'>{feeCollection?.Gender}</td>
                <td className='p-2 text-nowrap'>{feeCollection?.Class}</td>
                <td className='p-2 text-nowrap'>{feeCollection?.Section}</td>
                <td className='p-2 text-nowrap'>{feeCollection?.FeeType}</td>
                <td className='p-2 text-nowrap'>{feeCollection?.Amount}</td>
                <td className='p-2 text-nowrap'><span onClick={() => feeStatusHandler(feeCollection?.Status)} className={feeCollection?.Status === "Paid" ? "bg-green-500 rounded-3xl py-1 px-4 text-white cursor-pointer shadow-md hover:scale-105 duration-500" : feeCollection?.Status === "Overdue" ? "bg-red-300 text-red-600 rounded-3xl py-1 px-4 cursor-pointer shadow-md hover:scale-105 duration-500" : "bg-red-500 rounded-3xl py-1 px-4 text-white cursor-pointer shadow-md hover:scale-105 duration-500"}>{feeCollection?.Status}</span></td>
                <td className='p-2 text-nowrap'>{feeCollection?.Phone}</td>
                <td className='p-2 text-nowrap'>{feeCollection?.Email}</td>
            </tr>
        );
    };

export default AllFeeData;