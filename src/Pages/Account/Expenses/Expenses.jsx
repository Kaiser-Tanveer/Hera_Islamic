import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReusableTable from '../../../Components/SharedComponents/ReusableTable';
import ExpenseData from './ExpenseData';

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
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
        fetch('/Accounts/AllExpenses.json')
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setExpenses(data);
            setLoading(false);
        }).catch(err => {
            setError(err.messages);
            setLoading(false)
        })
    }, []);
    const paymentTableHeader = ["ID", "Name", "Expense Type", "Amount", "Status", "Phone", "Email", "Date"];


    const renderStudentRow = (expense) => (
        <ExpenseData key={expense.ID} expense={expense} />
    );
    return (
        <div className='bg-white rounded-md p-4 h-[96vh] overflow-auto'>
            <ReusableTable
                title={"All Expenses"}
                headers={paymentTableHeader}
                data={expenses}
                tableLoading={tableLoading}
                renderRow={renderStudentRow}
            />
        </div>
    );
};

export default Expenses;