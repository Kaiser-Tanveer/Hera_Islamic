import React, { useEffect, useState } from 'react';
import ReusableTable from '../../Components/SharedComponents/ReusableTable';
import AllSubjectData from './AllSubjectData';

const AllSubjects = () => {
    const [subjects, setSubjects] = useState([]);
    const [laoding, setLoading] = useState(false);
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
        fetch('/Subjects/Subjects.json')
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setSubjects(data);
            setLoading(false);
        }).catch(err => {
            setError(err.messages);
            setLoading(false)
        })
    }, []);
    const paymentTableHeader = ["SL", "Subject Name", "Subject Code", "Subject Type", "Class", "Date"];


    const renderStudentRow = (subject) => (
        <AllSubjectData key={subject.ID} subject={subject} />
    );
    return (
        <div className='bg-white rounded-md p-4 h-[96vh] overflow-auto'>
            <ReusableTable
                title={"All Subjects"}
                headers={paymentTableHeader}
                data={subjects}
                tableLoading={tableLoading}
                renderRow={renderStudentRow}
            />
        </div>
    );
};

export default AllSubjects;
