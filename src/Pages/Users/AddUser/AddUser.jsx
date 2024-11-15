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
        let userType = data.userType; // Get the selected userType

        try {
            const response = await fetch(`http://localhost:3003/api/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            

            if (response.ok) {
                // Redirect upon successful submission
                // navigate('/users');
            } else {
                console.error('Error submitting form:', response.statusText);
            }
        } catch (error) {
            console.error('Network error:', error);
        } finally {
            // Set loading to false when the request is done
            setLoading(false);
        }
    };

    // Form fields
    const fields = [
        { label: "First Name", name: "fName",  type: "text", placeholder: 'First Name' },
        { label: "Last Name", name: "lName",  type: "text", placeholder: 'Last Name' },
        { label: "Select User Type", name: "userType",  type: "select", placeholder: 'Select User Type', options: ['Super_Admin', 'Admin', 'Teacher', 'Parents', 'Student'] },
        { label: "Gender", name: "gender",  type: "select", placeholder: 'Gender', options: ['Male', 'Female', 'Other'] },
        { label: "Father's Name", name: "fatherName",  type: "text", placeholder: "Father's Name" },
        { label: "Mother's Name", name: "motherName",  type: "text", placeholder: "Mother's Name" },
        { label: "Date of Birth", name: "DOB",  type: "date", placeholder: 'Date of Birth', inputType: "date" },
        { label: "Religion", name: "religion",  type: "select", placeholder: 'Religion', options: ['Islam'] },
        { label: "Joining Date", name: "date",  type: "date", placeholder: 'Joining Date' },
        { label: "Email", name: "email",  type: "email", placeholder: 'Email' },
        { label: "Class", name: "class", type: "select", placeholder: 'Class', options: ['01', '02', '03', '04', '05'] },
        { label: "Section", name: "section", type: "select", placeholder: 'Section', options: ['A', 'B', 'C', 'D'] },
        { label: "Select Subject", name: "sub", type: "select", placeholder: 'Select Subject', options: ["Mathematics", "Science", "History", "Literature", "Geography", "Art", "Computer Science"] },
        { label: "Admission ID", name: "SID",  type: "text", placeholder: 'Admission ID' },
        { label: "Phone", name: "phone",  type: "tel", placeholder: '018XXXXXXXX' },
        { label: "Address", name: "address",  type: "text", placeholder: 'Location' },
        { label: "Blood Group", name: "blood", type: "select", placeholder: 'Blood Group', options: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
        { label: "Upload Student Photo", name: "img",  type: "file", placeholder: 'First Name' },
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
