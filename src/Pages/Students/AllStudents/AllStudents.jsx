import React, { useEffect, useState } from 'react';
import ReusableTable from '../../../Components/SharedComponents/ReusableTable';
import AllStudentData from './AllStudentData';

const AllStudents = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tableLoading, setTableLoading] = useState(true);
    console.log(students);

    //---------------------- Table Loader ---------------------//
    useEffect(() => {
        const timer = setTimeout(() => {
            setTableLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Fetching Student Data 
    useEffect(() => {
        fetch('http://localhost:3003/api/students')
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

    const stuTableHeader = ["Roll", "Photo", "Name", "Gender", "Class", "Section", "Parent", "Address", "Date of Birth", "Phone"]

    const renderStudentRow = (student) => (
        <AllStudentData key={student.roll} student={student} />
    );
    return (
        <div className='bg-white rounded-md p-4 h-[96vh]'>
            <ReusableTable
                title={"All Students"}
                headers={stuTableHeader}
                data={students}
                tableLoading={tableLoading}
                renderRow={renderStudentRow}
            />
        </div>
    );
};

export default AllStudents;