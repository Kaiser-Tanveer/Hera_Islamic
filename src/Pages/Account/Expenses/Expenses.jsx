import React, { useEffect, useState } from 'react';
import ReusableTable from '../../../Components/SharedComponents/ReusableTable';
import ExpenseData from './ExpenseData';
import NoData from '../../../Components/SharedComponents/NoData/NoData';
import { GiExpense } from 'react-icons/gi';

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tableLoading, setTableLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTableLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        fetch('http://localhost:3003/api/expenses')
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
            setError(err.message);
            setLoading(false);
        })
    }, []);

    const paymentTableHeader = ["Expense Title", "Expense Type", "Status", "Payee Name", "Method", "Expense Date", "Added By", "Amount"];

    const totalAmount = Array.isArray(expenses)
        ? expenses.reduce((total, expense) => total + Number(expense.amount || 0), 0)
        : 0;

    const renderExpenseRow = (expense) => (
        <ExpenseData key={expense.ID} expense={expense} setExpenses={setExpenses} />
    );

    return (
        <div className="bg-white rounded-md p-4 h-[96vh] overflow-auto">
        {
            expenses.length > 0 ?
            <ReusableTable
                title="All Expenses"
                headers={paymentTableHeader}
                data={expenses}
                tableLoading={tableLoading}
                renderRow={renderExpenseRow}
                totalAmount={totalAmount}
            />
            :
            <NoData
                message={`No expense Available`}
                icon={<GiExpense />}
            />
            }
        </div>
    );
};

export default Expenses;
