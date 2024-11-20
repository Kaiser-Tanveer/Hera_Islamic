import React from 'react';
import ReusableForm from '../../../Components/SharedComponents/ReusableForm/ReusableForm';
import useFormSubmission from '../../../MyHooks/useFormSubmission';
import { useNavigate } from 'react-router-dom';

const AddExpense = () => {
    const {loading, submitForm} = useFormSubmission();
    const navigate = useNavigate();

    const expenseHandler = (data) => {
        const formData = {
            title: data.title,
            expenseType: data.type,
            amount: data.amount,
            expenseDate: data.expenseDate,
            approvedBy: data.approvedBy,
            method: data.method,
            payeeName: data.payeeName,
            status: data.status,
            description: data.description,
          };
        submitForm({
            data: formData,
            endpoint: "expense",
            navigate,
            successMessage: "Book added successfully!",
            redirectPath: "/dashboard/expenses",
            additionalFields: { addedBy: "Admin" }, // Example of adding metadata
        });

    };
    const fields = [
        { label: "Expense Title", name: "title", required: true, type: "text", placeholder: 'Maintenance' },
        { label: "Expense Type", name: "type", required: true, type: "select", placeholder: 'Expense Type', options: ["Utilities", "Supplies", "Salaries"] },
        { label: "Amount (BDT)", name: "amount", required: true, type: "number", placeholder: `৳ 5000` },
        { label: "Expense Date", name: "expenseDate", required: true, type: "date", placeholder: 'The date the expense was incurred' },
        { label: "Approved By", name: "approvedBy", required: true, type: "text", placeholder: 'Name of the approver for the expense' },
        { label: "Payment Method", name: "method", required: true, type: "select", placeholder: 'Select Payment Method', options: ["Cash", "Check", "Bank Transfer", "Mobile Banking"] },
        { label: "Vendor/Payee Name", name: "payeeName", required: true, type: "text", placeholder: 'Name of the vendor or person paid' },
        { label: "Status", name: "status", required: true, type: "select", placeholder: 'Select Status', options: ["Paid", "Unpaid"] },
        { label: "Description", name: "description", type: "textarea", placeholder: 'Additional details about the expense', inputType: "text" },
    ];

    return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[95vh]'>
            <h2 className='pb-6 text-xl font-bold'>Add New Expense</h2>
            <ReusableForm onSubmit={expenseHandler} fields={fields} columnCount={3} loading={loading} />
        </div>
        );
    };  

export default AddExpense;