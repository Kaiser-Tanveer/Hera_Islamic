import React, { useEffect, useState } from 'react';
import ReusableTable from '../../Components/SharedComponents/ReusableTable';
import AllRoutineData from './AllRoutineData';

const AllRoutines = () => {
    const [AllRoutine, setAllRoutine] = useState([]);
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
        fetch('/Routine/Routine.json')
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setAllRoutine(data);
            setLoading(false);
        }).catch(err => {
            setError(err.messages);
            setLoading(false)
        })
    }, []);
    const paymentTableHeader = ["Day", "Class", "Subject", "Section", "Teacher", "Time", "Date"];

    const renderStudentRow = (routine) => (
        <AllRoutineData key={routine.ID} routine={routine} />
    );
    return (
        <div className='bg-white rounded-md p-4'>
            <ReusableTable
                title={"Class Routine"}
                headers={paymentTableHeader}
                data={AllRoutine}
                tableLoading={tableLoading}
                renderRow={renderStudentRow}
            />
        </div>
    );
};

export default AllRoutines;