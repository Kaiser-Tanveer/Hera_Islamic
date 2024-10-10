import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllStudents = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetching Student Data 
    useEffect(() => {
        fetch('/Students/Students.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setStudents(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    return (
        <div className='bg-white rounded-md p-4'>
            <h3 className='py-4 font-bold text-xl'>All Students Data</h3>
            <div className='overflow-auto'>
            <table className="border border-gray-200  overflow-auto border-l-0 p-2 w-[100%]">
                <thead className=''>
                    <tr className=''>
                        <th className='pr-2 py-2 text-nowrap'>Roll</th>
                        <th className='p-2 text-left text-nowrap'>Photo</th>
                        <th className='p-2 text-left text-nowrap'>Name</th>
                        <th className='p-2 text-left text-nowrap'>Gender</th>
                        <th className='p-2 text-left text-nowrap'>Class</th>
                        <th className='p-2 text-left text-nowrap'>Section</th>
                        <th className='p-2 text-left text-nowrap'>Parent</th>
                        <th className='p-2 text-left text-nowrap'>Address</th>
                        <th className='p-2 text-left text-nowrap'>Date of Birth</th>
                        <th className='p-2 text-left text-nowrap'>Phone</th>
                        <th className='pl-2 py-2 text-left text-nowrap'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(student => 
                            <tr key={student?.roll} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                                <td className='pr-2 py-2 text-nowrap'>{student?.roll}</td>
                                <td className='p-2 text-nowrap'>
                                <Link to="/stu" className='flex items-center gap-2'>
                                <img src={student?.studentImage} alt="" className='h-8 w-8 rounded-full' loading='lazy' />
                                </Link>
                                </td>
                                <td className='p-2 text-nowrap'>
                                <Link to="/stu" className='flex items-center gap-2'>
                                    {student?.name}
                                </Link>
                                </td>
                                <td className='p-2 text-nowrap'>{student?.gender}</td>
                                <td className='p-2 text-nowrap'>{student?.class}</td>
                                <td className='p-2 text-nowrap'>{student?.section}</td>
                                <td className='p-2 text-nowrap'>{student?.fathersName}</td>
                                <td className='p-2 text-nowrap'>{student?.address}</td>
                                <td className='p-2 text-nowrap'>{student?.dateOfBirth}</td>
                                <td className='p-2 text-nowrap'>{student?.phone}</td>
                                <td className='pl-2 py-2 text-nowrap'>{student?.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllStudents;