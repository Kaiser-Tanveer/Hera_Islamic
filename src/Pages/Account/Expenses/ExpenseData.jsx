import React from 'react';
import { Link } from 'react-router-dom';
import useEditDelete from '../../../MyHooks/useEditDelete';

const ExpenseData = ({ expense, setExpenses }) => {
    const { error, updateField, deleteData } = useEditDelete();

    const handleFieldUpdate = (e, fieldName, expense) => {
        updateField(e, fieldName, expense, setExpenses, 'expenses');
        console.log(e.target.value, fieldName, expense._id, 'expenses');
    };

    return (
        <>
            <tr className="border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100">
                <td className="p-2 text-nowrap">
                    <Link className="flex items-center gap-2">{expense?.title}</Link>
                </td>
                <td className="p-2 text-nowrap">{expense?.expenseType}</td>
                <td className="p-2 text-nowrap">
                    <select
                        onChange={(e) => handleFieldUpdate(e, 'status', expense)}
                        value={expense?.status || ''}
                        className={
                            expense?.status === 'Paid'
                                ? 'bg-green-500 rounded-3xl py-1 px-4 text-white cursor-pointer shadow-md hover:scale-105 duration-500'
                                : expense?.status === 'Overdue'
                                ? 'bg-red-300 text-red-600 rounded-3xl py-1 px-4 cursor-pointer shadow-md hover:scale-105 duration-500'
                                : 'bg-red-500 rounded-3xl py-1 px-4 text-white cursor-pointer shadow-md hover:scale-105 duration-500'
                        }
                    >
                        <option value="" disabled>
                            Select Status
                        </option>
                        <option value="Paid">Paid</option>
                        <option value="Unpaid">Unpaid</option>
                    </select>
                </td>
                <td className="p-2 text-nowrap">{expense?.payeeName}</td>
                <td className="p-2 text-nowrap">{expense?.method}</td>
                <td className="p-2 text-nowrap">{expense?.expenseDate}</td>
                <td className="p-2 text-nowrap">{expense?.addedBy}</td>
                <td className="p-2 pr-4 text-nowrap text-gray-500 text-right">৳{expense?.amount}/-</td>
            </tr>
            {error && <tr><td colSpan="8" className="text-red-500">{error}</td></tr>}
        </>
    );
};

export default ExpenseData;
