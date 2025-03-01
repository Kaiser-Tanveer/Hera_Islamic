import React from 'react';
import ReusableForm from '../../Components/SharedComponents/ReusableForm/ReusableForm';

const AddSubjects = () => {
const admissionFormHandler = (data) => {
};

const fields = [
        { label: "Subject Name", name: "subName", required: true, type: "text", placeholder: 'Enter Subject Name' },
        { label: "Subject Type", name: "subType", required: true, type: "select", placeholder: 'Select Subject Type', options: ["Mathematics", "Science", "History", "Literature", "Geography", "Art", "Music", "Computer Science", "Physics", "Chemistry"]},
        { label: "Class", name: "class", required: true, type: "select", placeholder: 'Class', options: ['01', '02', '03', '04', '05'] },
        { label: "Subject Code", name: "sCode", required: true, type: "number", placeholder: 'Subject Code' },
    ];
        return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[60vh]'>
            <h2 className='pb-6 text-xl font-bold'>Add New Subject</h2>
            <ReusableForm onSubmit={admissionFormHandler} fields={fields} columnCount={2} />
        </div>
        );
    };

export default AddSubjects;