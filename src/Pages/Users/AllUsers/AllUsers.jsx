import React from 'react';
import { Link } from 'react-router-dom';

const AllUsers = () => {
    return (
       <div className='bg-white p-6 rounded-md h-[60vh]'>
        <h2 className='pb-6 text-xl font-bold'>All Users</h2>
            <div className='flex items-start gap-8'>
            <aside className='w-[30%]'>
                <button className='w-full py-2 mb-2 rounded-md border border-blue-100 bg-blue-500 text-2xl text-white uppercase'>Super Admins</button>
                <button className='w-full py-2 my-2 rounded-md border border-blue-100 bg-blue-500 text-2xl text-white uppercase'>Admins</button>
                <button className='w-full py-2 my-2 rounded-md border border-blue-100 bg-blue-500 text-2xl text-white uppercase'>Parents</button>
                <button className='w-full py-2 my-2 rounded-md border border-blue-100 bg-blue-500 text-2xl text-white uppercase'>Students</button>
            </aside>
            <div className='w-[65%]'>
            <div className='overflow-auto'>
            <table className="border border-gray-200 overflow-auto border-l-0 p-2">
                <thead className=''>
                    <tr className=''>
                        <th className='pr-2 py-2 text-nowrap'>S. No</th>
                        <th className='p-2 text-nowrap'>Photo</th>
                        <th className='p-2 text-nowrap'>Name</th>
                        <th className='p-2 text-nowrap'>Gender</th>
                        <th className='p-2 text-nowrap'>Class</th>
                        <th className='p-2 text-nowrap'>Section</th>
                        <th className='p-2 text-nowrap'>Parent</th>
                        <th className='p-2 text-nowrap'>Address</th>
                        <th className='p-2 text-nowrap'>Date of Birth</th>
                        <th className='p-2 text-nowrap'>Phone</th>
                        <th className='pl-2 py-2 text-nowrap'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                        <td className='pr-2 py-2 text-nowrap'>01</td>
                        <td className='p-2 text-nowrap'>
                        <Link to="/singleUsers" className='flex items-center gap-2'>
                        <img src="https://www.radiustheme.com/demo/html/psdboss/akkhor/akkhor/img/figure/student1.jpg" alt="" className='h-8 w-8 rounded-full' />
                        </Link>
                        </td>
                        <td className='p-2 text-nowrap'>
                        <Link to="/singleUsers" className='flex items-center gap-2'>
                            Mrs. Y
                        </Link>
                        </td>
                        <td className='p-2 text-nowrap'>Female</td>
                        <td className='p-2 text-nowrap'>14</td>
                        <td className='p-2 text-nowrap'>A</td>
                        <td className='p-2 text-nowrap'>Abdul Halim</td>
                        <td className='p-2 text-nowrap'>Kanchana, Satkania, Chattogram</td>
                        <td className='p-2 text-nowrap'>25/01/2001</td>
                        <td className='p-2 text-nowrap'>018XXXXXXXXX</td>
                        <td className='pl-2 py-2 text-nowrap'>xyz@gmail.com</td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
            </div>
       </div>
    );
};

export default AllUsers;