import React from 'react';
import ReusableForm from '../../../Components/SharedComponents/ReusableForm/ReusableForm';

const AddBook = () => {
    const admissionFormHandler = (data) => {
    console.log(data);
};

const fields = [
    { label: "Subject Code", name: "sCode", required: true, type: "number", placeholder: 'Subject Code' },
    { label: "Book Name", name: "bName", required: true, type: "text", placeholder: 'Enter Class Name' },
    { label: "Subject", name: "sub", required: true, type: "text", placeholder: 'Enter Subject Name' },
    { label: "Writer Name", name: "writer", required: true, type: "text", placeholder: 'Enter Writer Name' },
    { label: "Class", name: "class", required: true, type: "select", placeholder: 'Class', options: ['01', '02', '03', '04', '05'] },
    { label: "Publishing Date", name: "pDate", required: true, type: "date", placeholder: 'Publishing Date', inputType: "date" },
    { label: "Uploaded Date", name: "upDate", required: true, type: "date", placeholder: 'Uploaded Date', inputType: "date" },
];

    return (
    <div className='bg-white p-6 rounded-md rounded-e-md h-[95vh]'>
        <h2 className='pb-6 text-xl font-bold'>Add New Book</h2>
        <ReusableForm onSubmit={admissionFormHandler} fields={fields} columnCount={3} />
    </div>
    );
};

export default AddBook;