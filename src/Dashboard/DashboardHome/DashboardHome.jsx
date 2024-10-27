import React, { useEffect, useState } from 'react';
import { FaRegMoneyBill1, FaUsers } from 'react-icons/fa6';

const ClientsEarningHeaders = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [parents, setParents] = useState([]);

    useEffect(() => {
        fetch('/Users/Users.json')
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setUsers(data); // Use the entire array directly
            setLoading(false);
        })
        .catch(err => {
            setError(err.message); // Correct error handling
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (users.length > 0) {
            const matchedStu = users.filter(user => user.UserType === "Student");
            setStudents(matchedStu);
            const matchedTeacher = users.filter(user => user.UserType === "Teacher"); // Corrected spelling
            setTeachers(matchedTeacher);
            const matchedParent = users.filter(user => user.UserType === "Parent"); // Corrected spelling
            setParents(matchedParent);
        }
    }, [users]);

    return (
        <div className='flex items-center justify-between gap-4'>
            <div className='bg-white rounded-md border border-sky-200 shadow-md h-28 w-52 flex items-center justify-between p-4'>
                <FaUsers className='text-6xl p-2 text-blue-700 bg-sky-100 rounded-full'/>
                <p className='text-xl font-semibold'>
                    <span className='text-gray-600'>Students</span><br />
                    <span>{students.length}</span> {/* Display actual count */}
                </p>
            </div>
            <div className='bg-white rounded-md border border-green-200 shadow-md h-28 w-52 flex items-center justify-between p-4'>
                <FaUsers className='text-6xl p-2 text-green-500 bg-green-100 rounded-full'/>
                <p className='text-xl font-semibold'>
                    <span className='text-gray-600'>Teachers</span><br />
                    <span>{teachers.length}</span> {/* Display actual count */}
                </p>
            </div>
            <div className='bg-white rounded-md border border-yellow-200 shadow-md h-28 w-52 flex items-center justify-between p-4'>
                <FaUsers className='text-6xl p-2 text-blue-700 bg-sky-100 rounded-full'/>
                <p className='text-xl font-semibold'>
                    <span className='text-gray-600'>Parents</span><br />
                    <span>{parents.length}</span> {/* Display actual count */}
                </p>
            </div>
            <div className='bg-white rounded-md border border-red-200 shadow-md h-28 w-52 flex items-center justify-between p-4'>
                <FaRegMoneyBill1 className='text-6xl p-2 text-red-500 bg-red-100 rounded-full'/>
                <p className='text-xl font-semibold'>
                    <span className='text-gray-600'>Earning</span><br />
                    <span className='text-red-500'>$1000</span>
                </p>
            </div>
        </div>
    );
};

export default ClientsEarningHeaders;
