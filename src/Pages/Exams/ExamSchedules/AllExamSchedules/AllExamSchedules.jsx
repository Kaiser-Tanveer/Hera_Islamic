import React, { useEffect, useState } from 'react';
import ReusableTable from '../../../../Components/SharedComponents/ReusableTable';
import AllExamScheduleData from './AllExamScheduleData';

const AllExamSchedules = () => {
    const [exams, setExams] = useState([]);
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
        fetch('/Exams/ExamSchedules.json')
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setExams(data);
            setLoading(false);
        }).catch(err => {
            setError(err.messages);
            setLoading(false)
        })
    }, []);
    const paymentTableHeader = ["Exam Name", "Subject", "Class", "Section", "Time", "Date"];

    const renderStudentRow = (exam) => (
        <AllExamScheduleData key={exam.ID} exam={exam} />
    );
    return (
        <div className='bg-white rounded-md p-4'>
            <ReusableTable
                title={"All Exam Schedules"}
                headers={paymentTableHeader}
                data={exams}
                tableLoading={tableLoading}
                renderRow={renderStudentRow}
            />
        </div>
    );
};

export default AllExamSchedules;