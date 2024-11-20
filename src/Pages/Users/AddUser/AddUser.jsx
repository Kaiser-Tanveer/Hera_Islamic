import React, { useState } from 'react';
import ReusableForm from '../../../Components/SharedComponents/ReusableForm/ReusableForm';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Handler for the form submission
    const admissionFormHandler = async (data) => {
        console.log(data);
        setLoading(true);

        try {
            const response = await fetch(`http://localhost:3003/api/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            

            if (response.ok) {
                navigate('/dashboard/users');
            } else {
                console.error('Error submitting form:', response.statusText);
            }
        } catch (error) {
            console.error('Network error:', error);
        } finally {
            setLoading(false);
        }
    };

    // Form fields
    const fields = [
        { label: "First Name", name: "fName", required: true, type: "text", placeholder: 'First Name' },
        { label: "Last Name", name: "lName", required: true, type: "text", placeholder: 'Last Name'},
        { label: "Select User Type", required: true, name: "userType",  type: "select", placeholder: 'Select User Type', options: ['Super_Admin', 'Admin', 'Teacher', 'Parents', 'Student'] },
        { label: "Gender", required: true, name: "gender",  type: "select", placeholder: 'Gender', options: ['Male', 'Female', 'Other'] },
        { label: "Father's Name", required: true, name: "fatherName",  type: "text", placeholder: "Father's Name" },
        { label: "Mother's Name", required: true, name: "motherName",  type: "text", placeholder: "Mother's Name" },
        { label: "Date of Birth", required: true, name: "DOB",  type: "date", placeholder: 'Date of Birth', inputType: "date" },
        { label: "Religion", required: true, name: "religion",  type: "select", placeholder: 'Religion', options: ['Islam'] },
        { label: "Joining Date", required: true, name: "date",  type: "date", placeholder: 'Joining Date' },
        { label: "Email", required: true, name: "email",  type: "email", placeholder: 'Email' },
        { label: "Class", required: true, name: "class", type: "select", placeholder: 'Class', options: ['01', '02', '03', '04', '05'] },
        { label: "Section", required: true, name: "section", type: "select", placeholder: 'Section', options: ['A', 'B', 'C', 'D'] },
        { label: "Select Subject", required: true, name: "sub", type: "select", placeholder: 'Select Subject', options: ["Mathematics", "Science", "History", "Literature", "Geography", "Art", "Computer Science"] },
        { label: "Admission ID", required: true, name: "SID",  type: "text", placeholder: 'Admission ID' },
        { label: "Phone", required: true, name: "phone",  type: "tel", placeholder: '018XXXXXXXX' },
        { label: "Address", required: true, name: "address",  type: "text", placeholder: 'Location' },
        { label: "Blood Group", required: true, name: "blood", type: "select", placeholder: 'Blood Group', options: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
        { label: "Upload Student Photo", required: true, name: "img",  type: "file", placeholder: 'First Name' },
        { label: "Short Bio", name: "bio", required: false, type: "text", placeholder: 'Write about the Teacher...' },
    ];

    return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[112vh]'>
            <h2 className='pb-6 text-xl font-bold'>Add New User</h2>
            <ReusableForm
                onSubmit={admissionFormHandler}
                fields={fields}
                columnCount={4}
                loading={loading}
            />
        </div>
    );
};

export default AddUser;
