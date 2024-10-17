import React, { useEffect, useState } from 'react';
import ReusableTable from '../../../../Components/SharedComponents/ReusableTable';
import AllGradeData from './AllGradeData';

const GradeLists = () => {
    const [grades, setGrades] = useState([]);
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
        fetch('/Exams/Grades.json')
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setGrades(data);
            setLoading(false);
        }).catch(err => {
            setError(err.messages);
            setLoading(false)
        })
    }, []);
    const paymentTableHeader = ["Student's Name", "Class", "Grades", "Points", "Percentage From", "Percentage To", "Comments"];

    const renderStudentRow = (grade) => (
        <AllGradeData key={grade.ID} grade={grade} />
    );
    return (
        <div className='bg-white rounded-md p-4'>
            <ReusableTable
                title={"All Grades"}
                headers={paymentTableHeader}
                data={grades}
                tableLoading={tableLoading}
                renderRow={renderStudentRow}
            />
        </div>
    );
};

export default GradeLists;