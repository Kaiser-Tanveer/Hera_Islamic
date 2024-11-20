import React from 'react';
import ReusableForm from '../../../Components/SharedComponents/ReusableForm/ReusableForm';
import { useNavigate } from 'react-router-dom';
import useUserFormSubmission from '../../../MyHooks/useUserFormSubmission';

const AdmissionForm = () => {
    const { loading, submitForm } = useUserFormSubmission();
    const navigate = useNavigate();

    const admissionFormHandler = (data) => {
        submitForm(data, "Student", "students", navigate);
    };

    const fields = [
        { label: "First Name", name: "fName", required: true, type: "text", placeholder: 'First Name' },
        { label: "Last Name", name: "lName", required: true, type: "text", placeholder: 'Last Name' },
        { label: "Gender", name: "gender", required: true, type: "select", placeholder: 'Gender', options: ['Male', 'Female', 'Other'] },
        { label: "Date of Birth", name: "DOB", required: true, type: "date", placeholder: 'Date of Birth' },
        { label: "Roll", name: "roll", required: true, type: "number", placeholder: 'Roll' },
        { label: "Class", name: "class", required: true, type: "select", placeholder: 'Class', options: ['01', '02', '03', '04', '05'] },
        { label: "Section", name: "section", required: true, type: "select", placeholder: 'Section', options: ['A', 'B', 'C', 'D'] },
        { label: "Admission ID", name: "SID", required: true, type: "text", placeholder: 'Admission ID' },
        { label: "Enter Parent Name", name: "parent", required: true, type: "text", placeholder: 'Parent' },
        { label: "Phone", name: "phone", required: true, type: "tel", placeholder: '018XXXXXXXX' },
        { label: "Address", name: "address", required: false, type: "text", placeholder: 'Enter your address' },
        { label: "Upload Student Photo", name: "img", required: true, type: "file", placeholder: 'Your PP' },
    ];

    return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[95vh]'>
            <h2 className='pb-6 text-xl font-bold'>Add New Students</h2>
            <ReusableForm
                onSubmit={admissionFormHandler}
                fields={fields}
                columnCount={4}
                loading={loading}
            />
        </div>
    );
};

export default AdmissionForm;
