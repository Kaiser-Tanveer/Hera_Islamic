import React from 'react';
import ReusableForm from '../../../Components/SharedComponents/ReusableForm/ReusableForm';
import { useNavigate } from 'react-router-dom';
import useFormSubmission from '../../../MyHooks/useFormSubmission';

const AddBook = () => {
    const {loading, submitForm} = useFormSubmission();
    const navigate = useNavigate();

    const booksHandler = (data) => {
        const formData = {
            subCode: data.sCode,
            bookName: data.bName,
            subject: data.sub,
            writer: data.writer,
            class: data.class,
            section: data.section,
            publishedDate: data.pDate,
            uploadedDate: data.upDate,
          };
        submitForm({
            data: formData,
            endpoint: "library",
            navigate,
            successMessage: "Book added successfully!",
            redirectPath: "/dashboard/allBooks",
            additionalFields: { addedBy: "Admin" }, // Example of adding metadata
        });

    };

const fields = [
    { label: "Subject Code", name: "sCode", required: true, type: "number", placeholder: 'Subject Code' },
    { label: "Book Name", name: "bName", required: true, type: "text", placeholder: 'Enter Class Name' },
    { label: "Subject", name: "sub", required: true, type: "text", placeholder: 'Enter Subject Name' },
    { label: "Writer Name", name: "writer", required: true, type: "text", placeholder: 'Enter Writer Name' },
    { label: "Class", name: "class", required: true, type: "select", placeholder: 'Class', options: ['01', '02', '03', '04', '05'] },
    { label: "Section", name: "section", required: true, type: "select", placeholder: 'Section', options: ['A', 'B', 'C', 'D'] },
    { label: "Publishing Date", name: "pDate", required: true, type: "date", placeholder: 'Publishing Date', inputType: "date" },
    { label: "Uploaded Date", name: "upDate", required: true, type: "date", placeholder: 'Uploaded Date', inputType: "date" },
];

    return (
    <div className='bg-white p-6 rounded-md rounded-e-md h-[95vh]'>
        <h2 className='pb-6 text-xl font-bold'>Add New Book</h2>
        <ReusableForm onSubmit={booksHandler} fields={fields} columnCount={3} loading={loading} />
    </div>
    );
};

export default AddBook;