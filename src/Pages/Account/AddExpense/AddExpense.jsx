import React from 'react';
import ReusableForm from '../../../Components/SharedComponents/ReusableForm/ReusableForm';

const AddExpense = () => {
    const admissionFormHandler = (data) => {
    }
    const fields = [
        { label: "ID", name: "id", required: true, type: "number", placeholder: 'Subject Code' },
        { label: "Name", name: "name", required: true, type: "text", placeholder: 'Enter Name' },
        { label: "Expense Type", name: "expenseType", required: true, type: "select", placeholder: 'Expense Type', options: ["Salaries and Wages", "Benefits", "Instructional Supplies", "Technology", "Facilities Maintenance", "Research Expenses", "Student Services", "Marketing and Recruitment", "Professional Development", "Travel Expenses"] },
        { label: "Status", name: "status", required: true, type: "select", placeholder: 'Select Status', options: ["Paid", "Unpaid"] },
        { label: "Expense Date", name: "expenseDate", required: true, type: "date", placeholder: 'Expense Date', inputType: "date" },
    ];

    return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[95vh]'>
            <h2 className='pb-6 text-xl font-bold'>Add New Expense</h2>
            <ReusableForm onSubmit={admissionFormHandler} fields={fields} columnCount={3} />
        </div>
        );
    };  

export default AddExpense;