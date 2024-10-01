import React from 'react';
import { Link } from 'react-router-dom';

const AllStudents = () => {
    return (
        <div className='bg-white rounded-md p-4'>
            <h3 className='py-4 font-bold text-xl'>All Students Data</h3>
            <div className='overflow-auto'>
            <table className="border border-gray-200  overflow-auto border-l-0 p-2 w-[100%]">
                <thead className=''>
                    <tr className=''>
                        <th className='pr-2 py-2 text-nowrap'>Roll</th>
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
                        <Link to="/stu" className='flex items-center gap-2'>
                        <img src="https://www.radiustheme.com/demo/html/psdboss/akkhor/akkhor/img/figure/student1.jpg" alt="" className='h-8 w-8 rounded-full' />
                        </Link>
                        </td>
                        <td className='p-2 text-nowrap'>
                        <Link to="/stu" className='flex items-center gap-2'>
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
    );
};

export default AllStudents;