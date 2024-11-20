import React from 'react';
import ReusableForm from '../../../Components/SharedComponents/ReusableForm/ReusableForm';
import useUserFormSubmission from '../../../MyHooks/useUserFormSubmission';
import { useNavigate } from 'react-router-dom';

const AddTeachers = () => {
    const { loading, submitForm } = useUserFormSubmission();
    const navigate = useNavigate();

    const addTeacherHandler = (data) => {
        submitForm(data, "Teacher", "teachers", navigate);
    };

    const fields = [
        { label: "First Name", name: "fName", required: true, type: "text", placeholder: 'First Name' },
        { label: "Last Name", name: "lName", required: true, type: "text", placeholder: 'Last Name'},
        { label: "Gender", name: "gender", required: true, type: "select", placeholder: 'Gender', options: ['Male', 'Female', 'Other'] },
        { label: "Date of Birth", name: "DOB", required: true, type: "date", placeholder: 'Date of Birth', inputType: "date" },
        { label: "ID No.", name: "TID", required: true, type: "text", placeholder: 'ID No.' },
        { label: "Blood Group", name: "blood", required: true, type: "select", placeholder: 'Blood Group', options: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
        { label: "Religion", name: "religion", required: true, type: "select", placeholder: 'Religion', options: ['Islam'] },
        { label: "Admission ID", name: "SID", required: true, type: "text", placeholder: 'Admission ID'},
        { label: "Email", name: "email", required: true, type: "email", placeholder: 'Email'},
        { label: "Class", name: "class", required: true, type: "select", placeholder: 'Class', options: ['01', '02', '03', '04', '05'] },
        { label: "Section", name: "section", required: true, type: "select", placeholder: 'Section', options: ['A', 'B', 'C', 'D'] },
        { label: "Enter Parent Name", name: "parent", required: true, type: "text", placeholder: 'Parent'},
        { label: "Address", name: "address", required: true, type: "text", placeholder: 'Location'},
        { label: "Phone", name: "phone", required: true, type: "tel", placeholder: '018XXXXXXXX'},
        { label: "Short Bio", name: "bio", required: false, type: "text", placeholder: 'Write about the Teacher...'},
        { label: "Upload Teacher's Photo", name: "img", required: true, type: "file", placeholder: 'First Name'},
    ];

    return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[95vh]'>
            <h2 className='pb-6 text-xl font-bold'>Add New Teacher</h2>
            <ReusableForm 
                onSubmit={addTeacherHandler}
                fields={fields}
                columnCount={4}
                loading={loading} />
        </div>
    );
};

export default AddTeachers;