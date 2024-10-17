import React, { useEffect, useState } from 'react';
import ReusableTable from '../../../Components/SharedComponents/ReusableTable';
import AllPaymentData from './AllPaymentData';

const TeacherPayment = () => {
    const [payment, setPayment] = useState([]);
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
        fetch('/Teachers/Payments.json')
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setPayment(data);
            setLoading(false);
        }).catch(err => {
            setError(err.messages);
            setLoading(false)
        })
    }, []);

    const paymentTableHeader = ["ID", "Photo", "Name", "Gender", "Class", "Subject", "Amount", "Status", "Parent", "Phone", "Email"];


    const renderStudentRow = (payment) => (
        <AllPaymentData key={payment.ID} payment={payment} />
    );
    return (
        <div className='bg-white rounded-md p-4 h-[96vh] overflow-auto'>
            <ReusableTable
                title={"Teacher's Payments"}
                headers={paymentTableHeader}
                data={payment}
                tableLoading={tableLoading}
                renderRow={renderStudentRow}
            />
        </div>
    );
};

export default TeacherPayment;