import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/Teachers/Teachers.json')
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setTeachers(data);
            setLoading(false);
        }).catch(err => {
            setError(err.messages);
            setLoading(false)
        })
    }, []);
    return (
        <div className='bg-white rounded-md p-4'>
            <h3 className='py-4 font-bold text-xl'>All Teachers Data</h3>
            <div className='overflow-auto'>
            <table className="border border-gray-200  overflow-auto border-l-0 p-2 w-[100%]">
                <thead className=''>
                    <tr className=''>
                        <th className='pr-2 py-2 text-nowrap'>ID</th>
                        <th className='p-2 text-left text-nowrap'>Photo</th>
                        <th className='p-2 text-left text-nowrap'>Name</th>
                        <th className='p-2 text-left text-nowrap'>Gender</th>
                        <th className='p-2 text-left text-nowrap'>Subject</th>
                        <th className='p-2 text-left text-nowrap'>Class</th>
                        <th className='p-2 text-left text-nowrap'>Section</th>
                        <th className='p-2 text-left text-nowrap'>Parent</th>
                        <th className='p-2 text-left text-nowrap'>Address</th>
                        <th className='p-2 text-left text-nowrap'>Joining Date</th>
                        <th className='p-2 text-left text-nowrap'>Phone</th>
                        <th className='pl-2 py-2 text-left text-nowrap'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        teachers.map(teacher =>
                            <tr key={teacher?.ID} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                                <td className='pr-2 py-2 text-nowrap'>{teacher?.ID}</td>
                                <td className='p-2 text-nowrap'>
                                <Link to={`teachers/${teacher?.ID}`} className='cursor-pointer'>
                                <img src={teacher?.TeacherImage} alt="" className='h-8 w-8 rounded-full' />
                                </Link>
                                </td>
                                <td className='p-2 text-nowrap'>
                                <Link to={`teachers/${teacher?.ID}`} className='cursor-pointer'>
                                    {teacher?.Name}
                                </Link>
                                </td>
                                <td className='p-2 text-nowrap'>{teacher?.Gender}</td>
                                <td className='p-2 text-nowrap'>{teacher?.Subject}</td>
                                <td className='p-2 text-nowrap'>{teacher?.Class}</td>
                                <td className='p-2 text-nowrap'>{teacher?.Section}</td>
                                <td className='p-2 text-nowrap'>{teacher?.ParentName}</td>
                                <td className='p-2 text-nowrap'>{teacher?.Address}</td>
                                <td className='p-2 text-nowrap'>{teacher?.AdmissionDate}</td>
                                <td className='p-2 text-nowrap'>{teacher?.Phone}</td>
                                <td className='pl-2 py-2 text-nowrap'>{teacher?.Email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllTeachers;