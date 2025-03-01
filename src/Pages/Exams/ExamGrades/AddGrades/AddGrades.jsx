import React from 'react';
import ReusableForm from '../../../../Components/SharedComponents/ReusableForm/ReusableForm';

const AddGrades = () => {
    const admissionFormHandler = (data) => {
    };
    
    const fields = [
        
        { label: "Select Grade", name: "gradeName", required: true, type: "select", placeholder: 'Select Grade', options: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F"]},
        { label: "Select Subject", name: "sub", required: true, type: "select", placeholder: 'Select Subject', options: ["Mathematics", "Science", "History", "Literature", "Geography", "Art", "Computer Science"]},
        { label: "Enter Grade Point", name: "gradePoint", required: true, type: "number", placeholder: 'Enter Grade Point', inputType: "number" },
        { label: "Percentage From", name: "pFrom", required: true, type: "number", placeholder: 'Percentage From', inputType: "number" },
        { label: "Percentage Upto", name: "pUpto", required: true, type: "select", placeholder: 'Percentage Upto', options: ['100', '50', '20', '200'] },
        { label: "Comment", name: "comment", required: true, type: "texarea", placeholder: 'Enter Grade Point', inputType: "texarea" },
        ];
    
        return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[80vh]'>
            <h2 className='pb-6 text-xl font-bold'>Add Class Routine</h2>
            <ReusableForm onSubmit={admissionFormHandler} fields={fields} columnCount={2} />
        </div>
    );
};

export default AddGrades;