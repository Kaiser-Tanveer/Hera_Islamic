import React, { useEffect, useState } from 'react';
import AllTeachersData from './AllTeachersData';
import ReusableTable from '../../../Components/SharedComponents/ReusableTable';

const AllTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tableLoading, setTableLoading] = useState(true);

    //---------------------- Table Loader ---------------------//
    useEffect(() => {
        const timer = setTimeout(() => {
            setTableLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

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
    const stuTableHeader = ["ID", "Photo", "Name", "Gender", "Class", "Section", "Parent", "Address", "Date of Birth", "Phone", "Email"]

    const renderStudentRow = (teacher) => (
        <AllTeachersData key={teacher.roll} teacher={teacher} />
    );
    return (
        <div className='bg-white rounded-md p-4 h-[96vh]'>
            <ReusableTable
                title={"All Teachers"}
                headers={stuTableHeader}
                data={teachers}
                tableLoading={tableLoading}
                renderRow={renderStudentRow}
            />
        </div>
    );
};

export default AllTeachers;