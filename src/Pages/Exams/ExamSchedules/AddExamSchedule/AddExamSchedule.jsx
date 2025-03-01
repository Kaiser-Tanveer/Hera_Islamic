import React from 'react';
import ReusableForm from '../../../../Components/SharedComponents/ReusableForm/ReusableForm';

const AddExamSchedule = () => {
    const admissionFormHandler = (data) => {
    };
    
    const fields = [
        { label: "Select Day", name: "day", required: true, type: "select", placeholder: 'Select Day', options: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]},
        { label: "Exam Type", name: "examType", required: true, type: "select", placeholder: 'Select Exam Type', options: ["Midterm", "Final", "Quiz", "Project", "Oral Exam", "Practical Exam", "Take-Home Exam"]},
        { label: "Select Subject", name: "sub", required: true, type: "select", placeholder: 'Select Subject', options: ["Mathematics", "Science", "History", "Literature", "Geography", "Art", "Computer Science"]},
        { label: "Select Class", name: "class", required: true, type: "select", placeholder: 'Select Class', options: ['01', '02', '03', '04', '05'] },
        { label: "Select Section", name: "section", required: true, type: "select", placeholder: 'Select Section', options: ['A', 'B', 'C', 'D', 'E'] },
        { label: "Select Time", name: "time", required: true, type: "select", placeholder: 'Select Time', options: ["10.00 - 11.00", "11.00 - 12.00", "12.00 - 01.00", "01.00 - 02.00", "02.00 - 03.00", "03.00 - 04.00"]},
        { label: "Enter Date", name: "examDate", required: true, type: "date", placeholder: 'Enter Date', inputType: "date" },
        ];
    
        return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[80vh]'>
            <h2 className='pb-6 text-xl font-bold'>Add Class Routine</h2>
            <ReusableForm onSubmit={admissionFormHandler} fields={fields} columnCount={3} />
        </div>
    );
};

export default AddExamSchedule;