import React from 'react';
import { Link } from 'react-router-dom';

const AllPaymentData = ({payment}) => {
    const statusHandler = (Status) => {
        console.log(Status);
    }
    return (
        <tr key={payment?.ID} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
            <td className='pr-2 py-2 text-nowrap'>{payment?.ID}</td>
            <td className='p-2 text-nowrap'>
            <Link to={`payments/${payment?.ID}`} className='cursor-pointer'>
            <img src={payment?.Photo} alt="" className='h-8 w-8 rounded-full' />
            </Link>
            </td>
            <td className='p-2 text-nowrap'>
            <Link to={`payments/${payment?.ID}`} className='cursor-pointer'>
                {payment?.Name}
            </Link>
            </td>
            <td className='p-2 text-nowrap'>{payment?.Gender}</td>
            <td className='p-2 text-nowrap'>{payment?.Class}</td>
            <td className='p-2 text-nowrap'>{payment?.Subject}</td>
            <td className='p-2 text-nowrap'>
                <p onClick={() => {
                console.log("Paragraph clicked");
                statusHandler(payment?.Status);
                }} className={payment?.Status === "Active" ? "opacity-100 text-green-500" : "opacity-40"}>
                    &#2547; {payment?.Amount}
                </p>

            </td>
            <td className='p-2 text-nowrap text-white'><button className={payment?.Status === "Active" ? "my-2 text-nowrap rounded-md px-2 shadow-md bg-green-100 text-green-700 border-green-700 border hover:scale-105 duration-500" : "my-2 text-nowrap rounded-md px-2 shadow-md bg-red-100 text-red-700 border-red-700 border hover:scale-105 duration-500"}>{payment?.Status}</button></td>
            <td className='p-2 text-nowrap'>{payment?.Parent}</td>
            <td className='p-2 text-nowrap'>{payment?.Phone}</td>
            <td className='pl-2 py-2 text-nowrap'>{payment?.Email}</td>
        </tr>
    );
};

export default AllPaymentData;