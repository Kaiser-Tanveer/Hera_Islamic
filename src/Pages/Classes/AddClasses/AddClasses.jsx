import React from 'react';
import ReusableForm from '../../../Components/SharedComponents/ReusableForm/ReusableForm';
import useFormSubmission from '../../../MyHooks/useFormSubmission';
import { useNavigate } from 'react-router-dom';

const AddClasses = () => {
    const {loading, submitForm} = useFormSubmission();
    const navigate = useNavigate();

    const addClassHandler = (data) => {
        const formData = {
            teacherName: data.tName,
            gender: data.gender,
            class: data.class,
            section: data.section,
            subject: data.sub,
            classTime: data.classTime,
            classDate: data.classDate,
            email: data.email,
            phone: data.tel,
          };
        submitForm({
            data: formData,
            endpoint: "classes",
            navigate,
            successMessage: "Book added successfully!",
            redirectPath: "/dashboard/classes",
            additionalFields: { addedBy: "Admin" },
        });

    };

const fields = [
        { label: "ID No.", name: "id", required: true, type: "number", placeholder: 'Enter ID' },
        { label: "Teacher's Name", name: "tName", required: true, type: "text", placeholder: "Enter Teacher's Name" },
        { label: "Select Gender", name: "gender", required: true, type: "select", placeholder: 'Select Gender', options: ['Male', 'Female'] },
        { label: "Select Class", name: "class", required: true, type: "select", placeholder: 'Select Class', options: ['01', '02', '03', '04', '05'] },
        { label: "Select Section", name: "section", required: true, type: "select", placeholder: 'Select Section', options: ['01', '02', '03', '04', '05'] },
        { label: "Select Subject", name: "sub", required: true, type: "select", placeholder: 'Select Subject', options: ['01', '02', '03', '04', '05'] },
        { label: "Select Time", name: "classTime", required: true, type: "time", placeholder: 'Select Time', inputType: "time" },
        { label: "Select Date", name: "classDate", required: true, type: "date", placeholder: 'Select Date', inputType: "date" },
        { label: "Enter Email", name: "email", required: true, type: "email", placeholder: 'Enter Email', inputType: "email" },
        { label: "Enter Phone", name: "tel", required: true, type: "tel", placeholder: 'Enter Phone', inputType: "tel" },
    ];

    return (
    <div className='bg-white p-6 rounded-md rounded-e-md h-[95vh]'>
        <h2 className='pb-6 text-xl font-bold'>Add New Class</h2>
        <ReusableForm onSubmit={addClassHandler} fields={fields} columnCount={3} loading={loading} />
    </div>
    );
};

export default AddClasses;