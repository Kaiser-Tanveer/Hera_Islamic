import React from 'react';
import ReusableForm from '../../../Components/SharedComponents/ReusableForm/ReusableForm';

const AddClasses = () => {
    const admissionFormHandler = (data) => {
    console.log(data);
};

const fields = [
        { label: "ID No.", name: "id", required: true, type: "number", placeholder: 'Enter ID' },
        { label: "Teacher's Name", name: "tName", required: true, type: "text", placeholder: "Enter Teacher's Name" },
        { label: "Select Gender", name: "gender", required: true, type: "select", placeholder: 'Select Gender', options: ['Male', 'Female'] },
        { label: "Select Class", name: "class", required: true, type: "select", placeholder: 'Select Class', options: ['01', '02', '03', '04', '05'] },
        { label: "Select Section", name: "class", required: true, type: "select", placeholder: 'Select Section', options: ['01', '02', '03', '04', '05'] },
        { label: "Select Subject", name: "class", required: true, type: "select", placeholder: 'Select Subject', options: ['01', '02', '03', '04', '05'] },
        { label: "Select Time", name: "classDate", required: true, type: "time", placeholder: 'Select Time', inputType: "time" },
        { label: "Select Date", name: "classDate", required: true, type: "date", placeholder: 'Select Date', inputType: "date" },
        { label: "Enter Email", name: "email", required: true, type: "email", placeholder: 'Enter Email', inputType: "email" },
        { label: "Enter Phone", name: "tel", required: true, type: "tel", placeholder: 'Enter Phone', inputType: "tel" },
    ];

    return (
    <div className='bg-white p-6 rounded-md rounded-e-md h-[95vh]'>
        <h2 className='pb-6 text-xl font-bold'>Add New Class</h2>
        <ReusableForm onSubmit={admissionFormHandler} fields={fields} columnCount={3} />
    </div>
    );
};

export default AddClasses;